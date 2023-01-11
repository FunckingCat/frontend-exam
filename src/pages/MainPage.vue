<template>
  <section id="main-page">
    <AddBanner/>
    <div class="filters d-flex flex-md-row w-100 justify-content-center flex-sm-column flex-xs-column">
      <div class="form-check d-flex mx-4 align-self-center">
        <input class="form-check-input" type="radio" name="sort" id="accend" value="accending" v-model="sortOrder">
        <label class="form-check-label ms-2" for="accend">
          По возрастанию цены
        </label>
      </div>
      <div class="form-check d-flex mx-4 align-self-center">
        <input class="form-check-input" type="radio" name="sort" id="decend" value="decending" v-model="sortOrder">
        <label class="form-check-label ms-2" for="decend">
          По убыванию цены
        </label>
      </div>
      <div class="form-check d-flex mx-4 align-self-center">
        <input class="form-check-input" type="radio" name="sort" id="nosort" value="nosort" v-model="sortOrder">
        <label class="form-check-label ms-2" for="nosort">
          Без сортировки
        </label>
      </div>
    </div>
    <div class="filters d-flex flex-row w-100 justify-content-center">
      <div class="form-check d-flex">
        <input class="form-check-input" type="radio" name="fiveStars" id="fiveStarsFalse" :value="false" v-model="fiveStars">
        <label class="form-check-label ms-2" for="fiveStarsFalse">
          Любые
        </label>
      </div>
      <div class="form-check d-flex mx-5">
        <input class="form-check-input" type="radio" name="fiveStars" id="fiveStars" :value="true" v-model="fiveStars">
        <label class="form-check-label ms-2" for="fiveStars">
          4 звезды и больше
        </label>
      </div>
    </div>
    <div class="cards d-flex flex-wrap my-3 justify-content-center">
      <ProductCard v-for="coupon in sortCoupons(coupons).filter((item) => {
        if (!fiveStars || item.rating > 3)
          return true;
        return false;
      })" :key="coupon.id" v-bind="coupon"/>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductCard from "@/components/ProductCard";
import AddBanner from "@/components/AddBanner";

export default {
  name: 'MainPage',
  components: {
    AddBanner,
    ProductCard
  },
  data() {
    return {
      sortOrder : "nosort",
      fiveStars : false
    }
  },
  methods: {
    sortCoupons(coupons) {
      return coupons.sort((a,b) => {
        let p1 = parseFloat(a.price)
        let p2 = parseFloat(b.price)
        if (this.sortOrder === "nosort")
          return 0;
        if (this.sortOrder === "accending") {
          if (p1 > p2) return 1;
          if (p1 < p2) return -1;
          return 0;
        }
        if (p1 > p2) return -1;
        if (p1 < p2) return 1;
        return 0;
      })
    }
  },
  computed: {
    ...mapGetters({
      coupons: "getCoupons"
    }),
  }
}
</script>

<style scoped>

</style>