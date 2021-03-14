<template>
  <div>
    <h1 class="bg-dark">Sudoku</h1>
    <sudoku-grid class="container" :factor="factor" :sudoku="sudoku" />
  </div>
</template>

<script>
import SudokuGrid from './SudokuGrid'

export default {
  name: "Sudoku",
  components: {
    'sudoku-grid': SudokuGrid
  },
  data() {
    return {
      factor: 3,
      sudoku: []
    }
  }
}
</script>

<style scoped>



</style>