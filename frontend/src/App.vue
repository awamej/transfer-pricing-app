<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: $main-font;
  font-size: 16px;
  font-weight: 400;
  color: $main-font-grey;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
body {
  padding: 0;
  margin: 0;
  position: fixed;
  width: 100%;
  scroll-behavior: smooth;
  height: 100%;
}

html {
  font-size: 16px;
}
body {
  height: 100%;
  min-height: 100%;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
