<template>
  <div>
    <h1 class="display-5">Dashboard</h1>
    <div class="row section">
      <div class="col" v-for="(metric, x) in metrics" :key="x">
        <ScoreCard :value="metric.count" :caption="metric.status"></ScoreCard>
      </div>
    </div>
    <div class="row section">
      <TransactionsList :transactions="transactions.data" :header="'Recent'"></TransactionsList>
    </div>
    <div class="row section text-center">
      <div class="col col-md-12">
        <a href="/transactions"><span class="spec-link">Show more >>></span></a>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreCard from "@/components/ScoreCard";
import TransactionsList from "@/components/TransactionsList";
import HttpClient from "@/helpers/HttpClient";

export default {
  name: "Dashboard",
  components: {
    ScoreCard,
    TransactionsList
  },
  data () {
    return {
      transactions: [],
      metrics: []
    }
  },
  methods: {
    getMetrics() {
      HttpClient.get('/api/admin/transactions/metrics').then(response => {
        this.metrics = response.data.data;
      })
    }
  },
  mounted() {
    this.getMetrics();
  }
}
</script>

<style scoped>
.section {
  margin-bottom: 50px;
}
.spec-link {

}
</style>