<template>
  <section class="container p-0 mt-2">
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
        <img src="../../public/img.png" class="img-fluid w-100" :alt="coupon.name">
        <div class="tab-content mt-2" id="myTabContent">
          <h2 class="display-6" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Условия</h2>
          <div class="" id="home" role="tabpanel" aria-labelledby="home-tab">{{ coupon.description }}</div>
          <h2 class="display-6" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Описание</h2>
          <div class="" id="profile" role="tabpanel" aria-labelledby="profile-tab">{{ coupon.condition }}</div>
          <h2 class="display-6" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Адрес</h2>
          <div class="" id="contact" role="tabpanel" aria-labelledby="contact-tab">{{ coupon.address }}</div>
        </div>
      </div>
      <div class="col2 col-4">
        <div class="">
          <div class="d-flex flex-row align-items-center mb-1">
            <h4 class="mb-1 me-1">{{ coupon.price }}₽</h4>
            <span class="text-danger"><s>{{ coupon.old_price }}₽</s></span>
          </div>
          <h6 class="text-success">Экономия {{ coupon.old_price - coupon.price }}₽</h6>
          <button class="w-100 ml-auto btn btn-outline-dark">Добавить в корзину</button>
          <button class="w-100 ml-auto btn btn-dark mt-4">Купить</button>
        </div>
      </div>
    </div>
    <div class="card p-3" v-for="comment in coupon.comments" :key="comment.name">
      <div class="d-flex justify-content-between align-items-center">
        <div class="user d-flex flex-row align-items-center">
          <img src="https://xsgames.co/randomusers/avatar.php?g=male" width="30" class="user-img rounded-circle mr-2">
          <div class="ms-4"><small class="font-weight-bold text-primary">{{ comment.name }}</small><span class="align-self-end"> ⭐⭐⭐⭐⭐</span><br>
            <small class="font-weight-bold">{{ comment.text }}</small></div>
        </div>
        <small>2 days ago</small>
      </div>
      <div class="action d-flex justify-content-between mt-2 align-items-center">
        <div class="reply px-4">
          <small>Remove</small>
          <span class="dots"></span>
          <small>Reply</small>
          <span class="dots"></span>
          <small>Translate</small>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body p-4">
        <div class="d-flex flex-start w-100">
          <img class="rounded-circle shadow-1-strong me-3"
               src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp" alt="avatar" width="65"
               height="65" />
          <form class="w-100">
            <h5>Оставить отзыв</h5>
            <div class="rating mb-3" data-mdb-toggle="rating">
              <label for="customRange3" class="form-label">Поставьте рейтинг</label>
              <input type="range" class="form-range"  defaut="5" min="1" max="5" step="1" id="customRange3">
            </div>
            <div class="form-outline">
              <label class="form-label" for="textAreaExample">Оставьте Ваш отзыв</label>
              <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <button type="button" class="btn btn-outline-dark">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
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

<style scoped>
.card {
  max-width: 60rem;
  border: none;
  border-radius: 4px;
}


.dots{

  height: 4px;
  width: 4px;
  margin-bottom: 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.badge{

  padding: 7px;
  padding-right: 9px;
  padding-left: 16px;
  box-shadow: 5px 6px 6px 2px #e9ecef;
}

.user-img{

  margin-top: 4px;
}

.check-icon{

  font-size: 17px;
  color: #c3bfbf;
  top: 1px;
  position: relative;
  margin-left: 3px;
}

.form-check-input{
  margin-top: 6px;
  margin-left: -24px !important;
  cursor: pointer;
}


.form-check-input:focus{
  box-shadow: none;
}


.icons i{

  margin-left: 8px;
}
.reply{

  margin-left: 12px;
}

.reply small{

  color: #b7b4b4;

}


.reply small:hover{

  color: green;
  cursor: pointer;

}
</style>