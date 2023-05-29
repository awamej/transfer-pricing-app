<template>
  <div class="side-menu">
    <div class="logo">
      <h4>Easy TP</h4>
    </div>
    <div class="nav-menu">
      <div
        v-for="(tab, index) in navTabs"
        :key="index"
        :class="tab == 'Dashboard' ? 'nav-tab-selected' : 'nav-tab'"
      >
        {{ tab }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      navTabs: ['Dashboard', 'Users', 'Companies', 'Transactions'],
    };
  },
};
</script>

<style scoped lang="scss">
.side-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  position: absolute;
  width: 35rem;
  height: 108rem;
  left: 0;
  top: 0;
  border-top-right-radius: 2.4rem;
  border-bottom-right-radius: 2.4rem;
  background-color: $main-green;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0.8rem 13.4rem;
  gap: 3rem;
  color: white;
  width: 22.43rem;
  height: 16.6rem;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 27.5rem;
  height: 25.6rem;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.nav-tab,
.nav-tab-selected {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem 2.2rem;
  gap: 3.1rem;
  width: 27.5rem;
  height: 6.4rem;
  border-radius: 0.8rem;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.nav-tab {
  background: transparent;
}
.nav-tab-selected {
  background-color: $main-background;
}
</style>
