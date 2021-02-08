<template>
  <ul class="nav">
    <li><router-link to="/">Dashboard</router-link></li>
    <li><router-link to="/transactions">Email Transactions</router-link></li>
    <li><router-link to="/mail-list">Mail List</router-link></li>
    <li><router-link to="/templates">Templates</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
.nav {
  padding: 10px;
  display: block;
}
li {
  list-style: none;
  display: block;
  height: 25px;
}
</style>