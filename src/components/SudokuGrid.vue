<template>
  <table>
    <tr v-for="(row, i) in size" :key="row" :class="{ nRow: multipleOfSqrt(row) }">
      <td v-for="(col, j) in size" :key="col"
          :class="{ nCol: multipleOfSqrt(col), selected: isSelected(sudoku[i][j]) }"
          @click="mark(i, j)">
        <span v-if="sudoku[i][j] != null" >{{sudoku[i][j]}}</span>
<!--        <span v-else-if="playerSolution[i][j] != null" class="text-primary">{{playerSolution[i][j]}}</span>-->
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "SudokuGrid",
  props: {
    size: {
      type: Number,
      required: true
    },
    sudoku: {
      type: Array,
      required: true
    },
    selected: {
      type: Number
    }
  },
  data() {
    return {
      playerSolution: {},
      notes: []
    }
  },
  methods: {
    initPlayerSolution() {
      let obj = {};

      for(let i = 0; i < this.size; i++){
        for(let j = 0; j < this.size; j++){
          obj[i][j] = {
            value: this.sudoku[i][j],
            player: this.sudoku[i][j],
            notes: []
          }
        }
      }

      this.playerSolution = obj;
    },
    isSelected(val){
      return val === this.selected;
    },
    multipleOfSqrt(n) {
      return n % Math.sqrt(this.size) === 0;
    },
    mark(row, col){
      console.log(row + ',' + col)
      this.set(this.playerSolution, row, )
      this.playerSolution[row][col] = this.selected;
    }
  },
  watch: {
    sudoku: {
      function() {
        if(this.sudoku !== []) this.initPlayerSolution()
      },
      deep: true
    }
  }
}
</script>

<style scoped>

table {
  border-collapse: collapse;
}

tr:first-child {
  border-top: solid 4px;
}

.nRow {
  border-bottom: solid 4px;
}

.nCol {
  border-right: solid 4px;
}

td:first-child {
  border-left: solid 4px;
}

td {
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
  text-align: center;
  border: solid 2px;
  font-size: xxx-large;
}

td:hover {
  background-color: lightblue;
}

.selected {
  background-color: lightgrey;
}

</style>