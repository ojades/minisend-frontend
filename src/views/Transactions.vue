<template>
  <div>
    <h1>Transactions</h1>
    <TransactionsList></TransactionsList>
  </div>
</template>

<script>
import TransactionsList from "@/components/TransactionsList";

export default {
  name: "Transactions",
  components: {
    TransactionsList
  }
}
</script>

<style scoped>

</style>