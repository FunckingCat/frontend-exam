<template>
  <div class="container my-4 p-0">
    <section>
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                     class="rounded-circle img-fluid" style="width: 150px;">
                <h5 class="my-3">Иван Иванов</h5>
                <p class="text-muted mb-1">4 года на сайте</p>
                <div class="d-flex justify-content-center mb-2">
                  <button type="button" class="btn btn-primary">Кнопка</button>
                  <button type="button" class="btn btn-outline-primary ms-1">Еще кнопка</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">ФИО</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Иванов Иван</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">polzovatel@mail.com</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Моб. тел.</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0" v-for="phone in phones" :key="phone">{{phone}}</p>
                    <hr/>
                    <form class="form-inline" v-on:submit.prevent="addPhone">
                      <div class="form-group mx-sm-3 mb-2">
                        <label for="phoneInput" class="sr-only">Телефон</label>
                        <input type="text" class="form-control" id="phoneInput" placeholder="8 (800) 555-35-35" v-model="phoneInput" inputmode="tel">
                      </div>
                      <button type="submit" class="btn btn-primary mb-2 ms-3" >Добавить телефон</button>
                    </form>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Адрес доставки</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">ул. Шутников, д. 16</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4"><span class="text-primary font-italic me-1">Мои заказы</span></p>
                    <p class="mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mt-4 mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mt-4 mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mt-4 mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mt-4 mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded mb-2" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4"><span class="text-primary font-italic me-1">Мои заказы</span></p>
                    <p class="mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mt-4 mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mt-4 mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mt-4 mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="mt-4 mb-1" style="font-size: .77rem;">Какая то информация</p>
                    <div class="progress rounded mb-2" style="height: 5px;">
                      <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                           aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      phoneInput : "",
      phones : []
    }
  },
  methods : {
    addPhone(e) {
      if (this.phoneInput.length > 5) {
        this.phones.push(this.phoneInput)
        this.phoneInput = ""
      }
      e.preventDefault()
    }
  }
}
</script>

<style>
</style>