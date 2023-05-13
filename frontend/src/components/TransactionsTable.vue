<template>
  <div class="hello">
    <table id="firstTable">
      <thead>
        <tr>
          <th>Selling entity</th>
          <th>Buying entity</th>
          <th>Type of transaction</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(t, index) in transactions" :key="index">
          <td>{{ t.seller }}</td>
          <td>{{ t.buyer }}</td>
          <td>{{ t.type }}</td>
          <td>{{ t.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ReposTable",
  props: {
    transactions: Array,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: auto;
}
table thead tr {
  background-color: #42b983;
  color: #ffffff;
  text-align: left;
}
table th,
table td {
  padding: 12px 15px;
}
table tbody tr {
  border-bottom: 1px solid #dddddd;
}
table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
</style>
