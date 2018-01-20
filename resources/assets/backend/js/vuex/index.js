import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        'loading': false,
        'admin_data': JSON.parse(localStorage.getItem('admin_data'))
    },
    mutations: {
        setStateValue(state, data) {
            for (var item in data) {
                state[item] = data[item];
            }
        }
    }
});

export default store;