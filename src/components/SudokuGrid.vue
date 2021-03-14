<template>
  <div>
    <table>
      <tr v-for="index in factor * factor" :key="index" :class="{ nRow: multipleOfFactor(index) }">
        <td v-for="index in factor * factor" :key="index" :class="{ nCol: multipleOfFactor(index) }">
          N
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "SudokuGrid",
  props: {
    factor: {
      type: Number,
      required: true
    },
    sudoku: {
      type: Array,
      required: true
    }
  },
  methods: {
    multipleOfFactor(n) {
      return n % this.factor === 0;
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
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
  text-align: center;
  border: solid 2px;
}

</style>