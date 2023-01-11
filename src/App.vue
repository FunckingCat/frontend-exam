<template>
  <PageHeader/>
  <router-view />
</template>

<script>
import PageHeader from "@/components/PageHeader";
import {mapActions} from "vuex";

export default {
  name: 'App',
  components: {
    PageHeader
  },
  methods: {
    ...mapActions(['receiveCoupons'])
  },
  mounted() {
      this.receiveCoupons()
  }
}
</script>

<style>
#app{
  padding: 0 1rem 0 1rem;
  max-width: 1800px;
  margin: auto;
}
</style>

