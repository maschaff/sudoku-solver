<template>
  <b-container>
    <h1 class="text-center">Sudoku</h1>
    <button @click="solve">Solve</button>
    <div class="pt-3 pb-3">
      <sudoku-grid class="mx-auto" :size="size" :sudoku="sudoku" :selected="selected" />
    </div>
    <div>
      <sudoku-selector class="mx-auto"
                       :size="size"
                       :selected="selected"
                       :notesOn="notesOn"
                       :deleteOn="deleteOn"
                       @select="select($event)"
                       @toggleNotes="toggleNotes"
                       @toggleDelete="toggleDelete"
      />
    </div>
  </b-container>
</template>

<script>
import Sudoku from '../services/sudoku'
import SudokuGrid from './SudokuGrid'
import SudokuSelector from "@/components/SudokuSelector";

import testPuzzle from '../test_puzzles/test1'

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
      selected: 1,
      notesOn: false,
      deleteOn: false
    }
  },
  created() {
    this.sudoku = testPuzzle.puzzle
    this.addKeypressListener()
  },
  methods: {
    solve() {
      Sudoku.solve(this.sudoku);
    },
    addKeypressListener() {
      document.addEventListener('keydown', (event) => {
        let key = parseInt(event.key)
        if(isFinite(key) && key <= this.size && key !== 0) this.select(key)
      })
    },
    select(val) {
      this.selected = val
    },
    toggleNotes() {
      this.deleteOn = false;
      this.notesOn = !this.notesOn;
    },
    toggleDelete() {
      this.notesOn = false;
      this.deleteOn = !this.deleteOn;
    }
  }
}
</script>

<style scoped>



</style>