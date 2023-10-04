import {createStore} from 'vuex'

export default createStore({
    state: {
        wide: false,
        mobile: false,
        tablet: false,
        tabletHorizontal: false,
        email: "info@mpu-institut-saar.de",
        /*email: "lelegraf1503@gmail.com",*/
        tab: '0'
    },
    getters: {
        tab: (state) => {
            return state.tab
        }
    },
    mutations: {
        tab(state, tab) {
            state.tab = tab
        }
    },
    actions: {
        tab(context, tab) {
            context.commit('tab', tab)
        }
    },
    modules: {}
})
