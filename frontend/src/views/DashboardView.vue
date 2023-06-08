<template>
  <div class="home container-fluid m-0">
    <div class="row main-row m-0 p-0">
      <div class="col-xl-2">
        <SideMenu />
      </div>
      <div class="col-xl-8">
        <div class="title-row m-0">
          <div class="col-xl-1"></div>
          <div class="col-xl-10 main-col">
            <h4 class="dashboard">Dashboard</h4>
          </div>
          <div class="col-xl-1"></div>
        </div>
        <div class="row m-0 p-o">
          <div class="col-xl-1"></div>
          <div class="col-11 main-col">
            <div class="transactions mb-5">
              <h5 class="m-0 p-0">My transactions</h5>
            </div>
            <div class="actions mt-5">
              <h5>Actions</h5>
            </div>
          </div>
          <div class="col-xl-1"></div>
        </div>
      </div>
      <div class="col-2 main-col">
        <div class="title-row m-0"></div>
        <div class="row m-0 p-o">
          <div class="col-12 main-col pr-0">
            <div class="info">
              <h5>Info</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue';
import * as api from '@/api.js';

export default {
  name: 'DashboardView',
  components: {
    SideMenu,
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
  background-color: $background;
  position: relative;
  padding: 0.938rem;
}

.main-row {
  height: 100%;
}

.title-row {
  height: 12.25rem;
  padding-top: 6.563rem;
  display: flex;
  flex-direction: row;
}

.main-col {
  position: relative;
}

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 4.063;
  color: $main-green;
}

.transactions,
.actions,
.info {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1.375rem;
  gap: 0.5rem;
  border: 0.5px solid #828282;
  border-radius: 8px;
  flex: none;
  order: 1;
  flex-grow: 0;
  background: #f4efeb;
  width: 90%;
  height: 80%;
}

.info {
  width: 100%;
}
</style>
