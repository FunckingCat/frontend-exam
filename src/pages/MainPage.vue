<template>
  <section id="main-page">
    <AddBanner/>
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