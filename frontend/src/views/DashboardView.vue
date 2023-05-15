<template>
  <div class="home">
    <h1>Easy TP - Dashboard</h1>
    <h3>My transactions</h3>
    <TransactionsTable :transactions="transactions" />
    <router-link :to="{ name: 'transactions', params: { transactions } }"
      >Show more</router-link
    >
  </div>
</template>

<script>
import TransactionsTable from "@/components/TransactionsTable.vue";
import * as api from "@/api.js";

export default {
  name: "DashboardView",
  components: {
    TransactionsTable,
  },
  data() {
    return {
      transactions: [
        {
          seller: "Alpaca Inc.",
          buyer: "Cisco Systems Inc.",
          type: "Cost-based",
          value: "1 325 857,78",
        },
        {
          seller: "Cisco Systems Inc.",
          buyer: "Alpaca.",
          type: "Cost-based",
          value: "5 325 857,78",
        },
        {
          seller: "Microsoft Corporation",
          buyer: "UBS Financial Services",
          type: "Market-based",
          value: "2 325 857,78",
        },
        {
          seller: "Cisco Systems Inc.",
          buyer: "Alpaca Inc.",
          type: "Cost-based",
          value: "1 325 857,78",
        },
      ],
    };
  },
  async created() {
    await api.getAllUsers();
  },
};
</script>
