<template>
  <header>
    <div class="d-flex flex-row-reverse">
      <div class="mx-5">
        <a class="text-body" href="tel:+74951234567">+7 (495) 123-45-67</a>
      </div>
      <div>
        <a class="text-body"
           href="https://www.google.com/maps/place/Coles/@-33.8297104,151.2185226,18z/data=!3m1!5s0x6b12aebd85b18e2b:0xca3e271b0395e16!4m5!3m4!1s0x6b12aebd88d4b77f:0x8a815601c50c8a76!8m2!3d-33.829441!4d151.2183538?hl=ru-RU">Москва</a>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-2">
      <div class="container-fluid">
        <img src="../../public/coupon.svg" class="logo"  alt="SiteLogo">
        <a class="navbar-brand" href="#/">Магазин купонов</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Главная</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href=https://raw.githubusercontent.com/FunckingCat/frontend-exam/main/public/coupons.json>main.json</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href=https://github.com/FunckingCat/frontend-exam>Резпозиторий</a>
            </li>
          </ul>
          <div class="mx-2 my-2 mr-0 d-flex align-items-center">
            <div class="text-white mx-2">
              <router-link class="nav-link text-light" to="/profile">polzovatel@mail.com</router-link>
            </div>
            <a href="#" class="btn btn-secondary">Выйти</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="mx-5 d-flex align-items-center justify-content-between">
      <ol class="breadcrumb d-none d-md-flex me-4" >
        <li class="breadcrumb-item chumb"><a class="text-body" href="#">Хлебные</a></li>
        <li class="breadcrumb-item chumb"><a class="text-body" href="#">Крошки</a></li>
      </ol>
      <form class="d-flex flex-grow-1 no-print" method="get" action="#">
        <input class="form-control me-2 no-print" type="search" placeholder="Например: Аквапарк"
               aria-label="search" name="search_string">
        <button class="btn btn-outline-dark no-print" type="submit">Поиск</button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
}
</script>

<style scoped>
.chumb {
  display: block;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.logo {
  height: 3rem;
  transform: translateY(-0.2rem);
  margin-right: 1rem;
}
@media print {
  .no-print { display: none; }
}
</style>