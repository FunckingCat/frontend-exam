<template>
  <section id="main-page">
    <AddBanner/>
    <div class="filters d-flex flex-row w-100 justify-content-center">
      <div class="form-check d-flex me-5">
        <input class="form-check-input" type="radio" name="sort" id="accend" value="accending" v-model="sortOrder">
        <label class="form-check-label ms-2" for="accend">
          По возрастанию цены
        </label>
      </div>
      <div class="form-check d-flex me-5">
        <input class="form-check-input" type="radio" name="sort" id="decend" value="decending" v-model="sortOrder">
        <label class="form-check-label ms-2" for="decend">
          По убыванию цены
        </label>
      </div>
      <div class="form-check d-flex me-5">
        <input class="form-check-input" type="radio" name="sort" id="nosort" value="nosort" v-model="sortOrder">
        <label class="form-check-label ms-2" for="nosort">
          Без сортировки
        </label>
      </div>
    </div>
    <div class="cards d-flex flex-wrap my-3 justify-content-center">
      <ProductCard v-for="coupon in coupons" :key="coupon.id" v-bind="coupon"/>
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
    }
  },
  methods: {},
  computed: {
    ...mapGetters({
      coupons: "getCoupons"
    }),
  }
}
</script>

<style scoped>

</style>