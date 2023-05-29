<template>
  <div class="home container-fluid p-0 m-0">
    <div class="row m-0 p-0">
      <div class="col-2">
        <SideMenu />
      </div>
      <div class="col-10">
        <h1>Easy TP - Dashboard</h1>
        <h3>My transactions</h3>
        <TransactionsTable :transactions="transactions" />
        <router-link :to="{ name: 'transactions', params: { transactions } }"
          >Show more</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import TransactionsTable from '@/components/TransactionsTable.vue';
import * as api from '@/api.js';

export default {
  name: 'DashboardView',
  components: {
    SideMenu,
    TransactionsTable,
  },
  data() {
    return {
      transactions: [
        {
          seller: 'Alpaca Inc.',
          buyer: 'Cisco Systems Inc.',
          type: 'Cost-based',
          value: '1 325 857,78',
        },
        {
          seller: 'Cisco Systems Inc.',
          buyer: 'Alpaca.',
          type: 'Cost-based',
          value: '5 325 857,78',
        },
        {
          seller: 'Microsoft Corporation',
          buyer: 'UBS Financial Services',
          type: 'Market-based',
          value: '2 325 857,78',
        },
        {
          seller: 'Cisco Systems Inc.',
          buyer: 'Alpaca Inc.',
          type: 'Cost-based',
          value: '1 325 857,78',
        },
      ],
    };
  },
  async created() {
    await api.getAllUsers();
  },
};
</script>

<style scoped lang="scss">
.a.router-link-active:visited {
  color: #42b983;
}
.home {
  width: 100vw;
  height: 100vh;
  background-color: $main-background;
}
</style>
