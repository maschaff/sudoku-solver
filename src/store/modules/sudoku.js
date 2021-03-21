import Vue from 'vue'
import sampleGrid from '../../test_puzzles/test1'

export default {
    state: {
        grid: []
    },
    getters: {
        getSideLength(state) {
            return state.grid.length;
        },
    },
    actions: {
        initGrid(state) {
            Vue.set(state, 'grid', sampleGrid.puzzle)
        }
    },
    mutations: {

    }
}