<template>
  <div class="col">
    <h4>{{ header }}</h4>
    <table class="table table-striped table-hover">
      <thead class="table-dark">
      <tr @click="toggleFilters">
        <th scope="col">Status</th>
        <th scope="col">Date</th>
        <th scope="col">Subject</th>
        <th scope="col">Sender</th>
        <th scope="col">Recipient</th>
      </tr>
      </thead>
      <tbody>
      <tr :style="showFilter ? '' : 'display: none'">
        <td>
          <select class="filter-input" v-model="filters.status">
          <option v-for="(status, x) in statuses" :key="x">{{ status }}</option>
        </select>
        </td>
        <td><input class="filter-input" /></td>
        <td><input class="filter-input" v-model="filters.subject" /></td>
        <td><input class="filter-input" v-model="filters.sender" /></td>
        <td>
          <input class="filter-input" :value="filters.recipient" />
          <div class="filter-buttons">
            <button type="button" class="btn btn-info filter clear" @click="clearFilter">clear</button>
            <button type="button" class="btn btn-primary filter submit" @click="getTransactions">filter</button>
          </div>
        </td>
      </tr>
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
      showFilter: false,
      transactions: [],
      filters: {
        limit: 10,
        subject: '',
        sender: '',
        recipient: '',
        status: ''
      },
      statuses: []
    }
  },
  methods: {
    getTransactions() {
      HttpClient.get('/api/admin/transactions', {
        params: this.filters
      }).then(resp => {
        if(resp.data.data) {
          this.transactions = resp.data.data.data;
        }
        if(typeof resp.data.extra !== 'undefined') {
          this.statuses = resp.data.extra.statuses
        }
      })
    },
    toggleFilters() {
      this.showFilter = !this.showFilter
    },
    filter() {
      this.getTransactions();
    },
    clearFilter() {
      this.filters.status = this.filters.subject = this.filters.sender = this.filters.recipient = '';
      this.getTransactions();
    }
  },
  mounted() {
    this.getTransactions();
  }
}
</script>

<style scoped>
.filter-buttons {
  margin-top: 5px;
}
.filter {
  padding-top: .14rem;
  padding-bottom: .14rem;
}
.filter.submit {
  float: right;
}
.filter-input {
  width: 100%;
}
</style>