<template>
  <div class="container p-0 mt-2">
    <div class="title">
      <div class="d-flex">
        <h1 class="d-block">{{ coupon.name }}</h1>
        <span class="badge bg-warning align-self-start mx-2">NEW</span>
      </div>
      <div class="subtitle">
        <h2 class="h6">{{ coupon.info }}</h2>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col1 col-8">
        <img src="../../public/img.png" class="img-fluid" :alt="coupon.name">
        <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active text-body" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Условия</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link text-body" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Описания</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link text-body" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Адреса</button>
          </li>
        </ul>
        <div class="tab-content mt-2" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">{{ coupon.description }}</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">{{ coupon.condition }}</div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">{{ coupon.address }}</div>
        </div>
      </div>
      <div class="col2 col-4">
        <div class="">
          <div class="d-flex flex-row align-items-center mb-1">
            <h4 class="mb-1 me-1">{{ coupon.price }}₽</h4>
            <span class="text-danger"><s>{{ coupon.old_price }}₽</s></span>
          </div>
          <h6 class="text-success">Экономия {{ coupon.old_price - coupon.price }}₽</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ProductPage',
  components: {
  },
  methods: {
    ...mapGetters(['getCoupons'])
  },
  computed: {
    coupon() { return this.getCoupons().filter(cp => cp.id == this.$route.params.id)[0]}
  },
}
</script>

<style>
</style>