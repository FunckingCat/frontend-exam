<template>
  <section class="card m-2">
    <img src="../../public/img.png" class="card-img-top" alt="Product Image">
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title title">{{ name }}</h5>
      <p class="card-text text">{{ description }}</p>
      <div class="align-self-end">⭐⭐⭐⭐⭐</div>
      <div class="align-self-end">{{ totalCells }} 🛒</div>
      <div class="card-text price align-self-end">{{ price }}₽</div>
      <router-link :to="'/product/' + id" class="ml-auto btn btn-dark">Купить</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCard",
  props: ['id', 'name', 'description', 'price'],
  computed: {
    totalCells() {
      return Math.floor(Math.random() * 1000);
    }
  }
}
</script>

<style scoped>
.card {
  width: 18rem;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  line-clamp: 5;
  -webkit-box-orient: vertical;
}
.fa {
  font-size: 25px;
}
.checked {
  color: orange;
}
</style>