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
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="col-xl-1"></div>
        </div>
        <div class="row m-0 p-o">
          <div class="col-xl-1"></div>
          <div class="col-10 main-col">
            <div class="transactions">x</div>
          </div>
          <div class="col-xl-1"></div>
        </div>
      </div>
      <div class="col-2"></div>
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
  background-color: $main-background;
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
  position: absolute;
  left: 0;
  text-align: left;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #5f6c5f;
}

.transactions {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1.375rem;
  gap: 0.5rem;

  width: 61.875rem;
  height: 26.5rem;
  background: #f4efeb;

  border: 0.5px solid #828282;
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>
