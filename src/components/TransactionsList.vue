<template>
  <div class="col">
    <h4>{{ header }}</h4>
    <table class="table table-striped table-hover">
      <thead class="table-dark">
      <tr>
        <th scope="col">Status</th>
        <th scope="col">Date</th>
        <th scope="col">Subject</th>
        <th scope="col">Sender</th>
        <th scope="col">Recipient</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(trans, x) in transactions" :key="x">
        <td>{{trans.status}}</td>
        <td>{{trans.created_at}}</td>
        <td>{{trans.subject}}</td>
        <td>{{trans.sender_email}}</td>
        <td>{{trans.recipient_email}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HttpClient from "@/helpers/HttpClient";

export default {
  name: "TransactionsList",
  props: {
    limit: [Number],
    header: [String]
  },
  data() {
    return {
      transactions: []
    }
  },
  methods: {
    getTransactions() {
      let params = 'limit=50';

      if(this.limit) {
        params = 'limit=' + this.limit
      }
      HttpClient.get('/api/admin/transactions?' + params).then(resp => {
        if(resp.data.data) {
          this.transactions = resp.data.data.data
        }
      })
    }
  },
  mounted() {
    this.getTransactions();
  }
}
</script>

<style scoped>

</style>