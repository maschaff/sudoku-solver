import Vue from 'vue'
import VueRouter from 'vue-router'

import Sudoku from '../components/Sudoku'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/sudoku'
    },
    {
        path: '/sudoku',
        name: 'game',
        component: Sudoku
    }
]

export default new VueRouter({
    routes
})