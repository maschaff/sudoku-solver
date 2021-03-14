<template>
  <table>
    <tr>
      <td v-for="n in size" :key="n"
          :class="{ selected: isSelected(n) }"
          @click="select(n)">{{n}}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "SudokuSelector",
  props: ['size', 'selectedFill'],
  methods: {
    isSelected(n) {
      return n === this.selectedFill
    },
    select(n) {
      this.$emit('select',  n)
    }
  }
}
</script>

<style scoped>

.selected {
  background-color: lightgrey;
}

table {
  border-collapse: collapse;
}

td {
  width: 80px;
  height: 80px;
  padding: 0;
  margin: 0;
  text-align: center;
  border: solid 4px;
  font-size: xxx-large;
}

td:hover {
  background-color: lightgrey;
}

</style>