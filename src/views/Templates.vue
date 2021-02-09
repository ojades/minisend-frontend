<template>
  <div>
    <h1>Templates</h1>
    <div class="col col-md-12">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
        <tr @click="toggleFilters" class="linkable">
          <th scope="col">Status</th>
          <th scope="col">Name</th>
          <th scope="col">Sender</th>
          <th scope="col">Content</th>
          <th scope="col">Date Created</th>
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
          <td><input class="filter-input" v-model="filters.name" /></td>
          <td><input class="filter-input" v-model="filters.sender" /></td>
          <td>
            <input class="filter-input" :value="filters.created_at" />
            <div class="filter-buttons">
              <button type="button" class="btn btn-info filter clear" @click="clearFilter">clear</button>
              <button type="button" class="btn btn-primary filter submit" @click="getTransactions">filter</button>
            </div>
          </td>
        </tr>
        <tr v-for="(temp, x) in templates" :key="x">
          <td>{{temp.status}}</td>
          <td>{{temp.name}}</td>
          <td>{{temp.sender_email }}</td>
          <td>{{temp.content}}</td>
          <td>{{temp.created_at}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HttpClient from "@/helpers/HttpClient";

export default {
  name: "Templates",
  data() {
    return {
      templates: [],
      filters: {
        name: '',
        sender: '',
        status: '',
        created_at: ''
      },
      showFilter: false
    }
  },
  methods: {
    getTransactions() {
      HttpClient.get('/api/admin/templates', {
        params: this.filters
      }).then(resp => {
        if(resp.data.data) {
          this.templates = resp.data.data.data;
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

</style>