import Vue from 'vue'
import Vuex from 'vuex'
import sudoku from './modules/sudoku'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: {
        sudoku
    }
})
