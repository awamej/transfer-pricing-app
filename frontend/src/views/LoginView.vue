<template>
  <div class="login container-fluid m-0">
    <div class="background-image">
      <div class="row main-row m-0 p-0">
        <div class="col-xl-8">
          <div class="row footer d-flex flex-column">
            <div class="logo align-items-center">
              <img
                src="@/assets/easy-tp-logo-white.png"
                class="easy-tp-logo m-0 mr-3 p-0"
              />
              <h1>Easy TP</h1>
            </div>
            <div>
              <h3>Transfer Pricing Compliance App</h3>
            </div>
          </div>
        </div>
        <div class="col-xl-4 side-panel-container">
          <SidePanelSignIn />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidePanelSignIn from '@/components/SidePanelSignIn.vue';

export default {
  name: 'LoginView',
  components: {
    SidePanelSignIn,
  },
};
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 0;
}

.background-image {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/login-image.png');
}

.main-row {
  height: 100%;
  position: relative;
}

.footer {
  position: absolute;
  bottom: 0;
  padding: 0.938rem;
}

.logo {
  flex: none;
  display: flex;
  justify-content: flex-start;
}

.easy-tp-logo {
  width: 4.361rem;
  height: 3.375rem;
  color: $windows;
}

.side-panel-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 0.938rem;
}
</style>
