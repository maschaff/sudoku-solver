<template>
  <b-container fluid="">
    <br>
    <div>
      <sudoku-grid :size="size" :sudoku="sudoku" />
    </div>
    <br>
    <div class="pt-12">
      <sudoku-selector :size="size" :selectedFill="selectedFill" @select="select($event)"/>
    </div>
  </b-container>
</template>

<script>
import SudokuGrid from './SudokuGrid'
import SudokuSelector from "@/components/SudokuSelector";

import puzzle from '../test_puzzles/test1'

export default {
  name: "Sudoku",
  components: {
    'sudoku-grid': SudokuGrid,
    'sudoku-selector': SudokuSelector
  },
  data() {
    return {
      size: 9,
      sudoku: [],
      selectedFill: 1
    }
  },
  created() {
    this.sudoku = puzzle
    this.addKeypressListener()
  },
  methods: {
    addKeypressListener() {
      document.addEventListener('keydown', (event) => {
        let key = parseInt(event.key)
        if(isFinite(key) && key <= this.size && key !== 0) this.select(key)
      })
    },
    select(val) {
      this.selectedFill = val
    }
  }
}
</script>

<style scoped>



</style>