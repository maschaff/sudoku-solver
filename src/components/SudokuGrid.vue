<template>
  <table>
    <tr v-for="row in size" :key="row" :class="{ nRow: multipleOfSqrt(row) }">
      <td v-for="col in size" :key="col" :class="{ nCol: multipleOfSqrt(col) }" @click="printElement(row, col)">
        {{ sudoku[row -1][col -1] }}
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
    }
  },
  methods: {
    multipleOfSqrt(n) {
      return n % Math.sqrt(this.size) === 0;
    },
    printElement(row, col) {
      console.log(row + ', ' + col)
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
  /*font-weight: bold;*/
}

td:hover {
  background-color: lightgrey;
}

</style>