<template>
  <div class="about">
    <h3>Transactions</h3>
    <TransactionsTable :transactions="transactions" />
    <router-link :to="{ name: 'dashboard' }">Go back</router-link>
  </div>
</template>

<script>
import TransactionsTable from "@/components/TransactionsTable.vue";

export default {
  components: {
    TransactionsTable,
  },
  data() {
    return {
      transactions: this.$route.params.transactions,
    };
  },
};
</script>

<style scoped>
.a.router-link-active:visited {
  color: #42b983;
}
</style>
