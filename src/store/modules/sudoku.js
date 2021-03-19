import Vue from 'vue'
import sampleGrid from '../../test_puzzles/test1'

export default {
    store: {
        grid: []
    },
    getters: {
        getSideLength(store) {
            return store.grid.length;
        },
    },
    actions: {
        initGrid(store) {
            Vue.set(store, 'grid', sampleGrid.puzzle)
        }
    },
    mutations: {

    }
}