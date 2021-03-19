<template>
  <table>
    <tr>
      <td v-for="n in size" :key="n"
          :class="{ selected: n === selected }"
          @click="$emit('select', n)">{{n}}
      </td>
      <td :class="{ 'bg-primary': notesOn }" @click="$emit('toggleNotes')">
        <b-icon icon="pencil-square" />
      </td>
      <td :class="{ 'bg-primary': deleteOn }" @click="$emit('toggleDelete')">
        <b-icon icon="trash" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "SudokuSelector",
  props: ['size', 'selected', 'notesOn', 'deleteOn']
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