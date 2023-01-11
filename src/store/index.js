import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            coupons: []
        }
    },
    getters: {
      getCoupons (state) {
          return state.coupons
      }
    },
    mutations: {
        updateCoupons (state, cp) {
            state.coupons = cp
        }
    },
    actions: {
        async receiveCoupons(context) {
            const response = await fetch('coupons.json').then(r => r.json())
            context.commit('updateCoupons', response.results)
        }
    }
})

export default store
