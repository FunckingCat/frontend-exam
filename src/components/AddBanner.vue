<template>
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light bg-image mt-2">
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    <div class="col-md-5 p-lg-5 mx-auto my-5 banner-text">
      <h1 class="display-6 fw-normal">Купите купоны!</h1>
      <p class="fw-normal">Ежедневно на сайте появляются специальные предложения и акции, по условиям которых Вы можете купить купон на скидку от 50 до 90%</p>
      <a class="btn btn-outline-secondary" href="#">Скорее покупать купоны</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBanner"
}
</script>

<style scoped>
.bg-image {
  background-image: url("../../public/pattern.png");
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
}
.banner-text {
  z-index: 2;
  position: relative;
  background-color: rgba(var(--bs-light-rgb),var(--bs-bg-opacity));
  border-radius: 4rem;
  padding: 2rem;
}
.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 7%;
  background-color: #e5e5e5;
  z-index: 1;
}
.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  transform: rotate(30deg);
  z-index: 1;
}
.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
  z-index: 1;
}
</style>