<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Title</th>
        <th scope="col">Text</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="arr in data" :key="arr">
        <th scope="row">{{ arr.id }}</th>
        <td>{{ arr.name }}</td>
        <td>{{ arr.title }}</td>
        <td>{{ arr.text }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import data from "../data";
export default {
  name: "articleList",
  data() {
    return {
      data: data
    };
  }
};
</script>

<style scoped>
.table {
  width: 800px;
}
</style>
