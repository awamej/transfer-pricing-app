<template>
  <div class="side-menu">
    <div class="logo">
      <img src="@/assets/easy-tp-logo.png" class="easy-tp-logo m-0 p-0" />
      <h4>Easy TP</h4>
    </div>
    <div class="nav-menu">
      <div
        v-for="(tab, index) in navTabs"
        :key="index"
        :class="tab.toLowerCase() == path ? 'nav-tab-selected' : 'nav-tab'"
      >
        <img
          :src="require(`@/assets/${tab.toLowerCase()}.png`)"
          :class="
            tab.toLowerCase() == path ? 'nav-tab-icon-selected' : 'nav-tab-icon'
          "
        />
        <router-link :to="'/' + tab.toLowerCase()">{{ tab }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      path: '',
      navTabs: ['Dashboard', 'Users', 'Companies', 'Transactions'],
    };
  },
  created() {
    this.path =
      this.$route.path.slice(1) === ''
        ? 'dashboard'
        : this.$route.path.slice(1);
    console.log(this.path, 'route');
  },
};
</script>

<style scoped lang="scss">
.side-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0.15rem 6.188rem;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0 1.5rem 1.5rem 0;
  background-color: $main-green;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0.5rem 8.375rem;
  gap: 1.875rem;
  color: white;
  width: 17rem;
  height: 10.375rem;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.easy-tp-logo {
  width: 2.581rem;
  height: 1.998rem;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0;
  width: 17rem;
  height: 16rem;
  flex: none;
  order: 1;
  flex-grow: 0;
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 600;
}

.nav-tab,
.nav-tab-selected {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.25rem 1.375rem;
  gap: 1.938rem;
  width: 17rem;
  height: 4rem;
  border-radius: 0.5rem;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.nav-tab {
  background: transparent;
  a {
    color: $windows;
  }
}
.nav-tab-selected {
  background-color: $main-background;
  a {
    color: $primary-grey;
  }
  a:hover {
    text-decoration: none;
    cursor: default;
  }
}

.nav-tab-icon,
.nav-tab-icon-selected {
  width: 1.5rem;
  height: 1.5rem;
}

.nav-tab-icon {
  color: $windows;
}

.nav-tab-icon-selected {
  color: $primary-grey;
}
</style>
