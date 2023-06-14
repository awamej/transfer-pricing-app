<template>
  <div class="side-panel">
    <div :class="isLogin ? 'pt-5' : ''">
      <h4 class="main-green-font text-left">
        {{ isLogin ? 'Welcome' : 'Sign in' }}
      </h4>

      <div class="input-title-login">
        <h6 class="text-left">Email</h6>
      </div>
      <input
        type="email"
        class="input-white"
        maxlength="254"
        placeholder="Enter email"
        v-model="user.email"
      />

      <div v-if="!isLogin" class="input-title-login">
        <h6 class="text-left">First name</h6>
      </div>
      <input
        v-if="!isLogin"
        type="text"
        class="input-white"
        maxlength="30"
        placeholder="Enter first name"
        v-model="user.firstName"
      />

      <div v-if="!isLogin" class="input-title-login">
        <h6 class="text-left">Last name</h6>
      </div>
      <input
        v-if="!isLogin"
        type="text"
        class="input-white"
        maxlength="50"
        placeholder="Enter last name"
        v-model="user.lastName"
      />

      <div v-if="!isLogin" class="input-title-login">
        <h6 class="text-left">Company</h6>
      </div>
      <div v-if="!isLogin">
        <vue-multiselect
          :value="company"
          :options="companies"
          label="name"
          :searchable="true"
          @select="selectCompany"
          placeholder="Select company"
          select-label=""
          deselect-label=""
        >
          <template slot="noOptions">No options</template>
          <template slot="noResult">No results</template>
          <template slot="singleLabel" slot-scope="props">{{
            props.option.name
          }}</template>
          <template slot="option" slot-scope="props">
            {{ props.option.name }}
          </template>
        </vue-multiselect>
      </div>

      <div class="input-title-login">
        <h6 class="text-left">Password</h6>
      </div>
      <input
        type="password"
        class="input-white"
        maxlength="50"
        placeholder="Enter password"
        v-model="user.password"
      />

      <div v-if="!isLogin" class="input-title-login">
        <h6 class="text-left">Confirm password</h6>
      </div>
      <input
        v-if="!isLogin"
        type="password"
        class="input-white"
        maxlength="50"
        placeholder="Confirm password"
        v-model="passwordToConfirm"
      />
      <div class="footer text-left">
        <button class="login-button" @click="confirm">
          {{ isLogin ? 'Log in' : 'Sign up' }}
        </button>
        <span @click="toggleLogin" class="link">{{
          isLogin
            ? 'Do not have an account? Sign up!'
            : 'Already have an account? Log in!'
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/api.js';

export default {
  name: 'SidePanelLogin',
  data() {
    return {
      isLogin: true,
      user: {},
      company: {},
      companies: [],
      passwordToConfirm: '',
    };
  },
  methods: {
    async confirm() {
      if (this.isLogin) {
        const response = await api.loginUser(this.user);
        if ('token' in response) {
          this.$router.push('/');
        }
      } else {
        await api.registerUser(this.user);
      }
    },
    toggleLogin() {
      this.isLogin = !this.isLogin;
    },
    selectCompany() {
      console.log('company selected');
    },
  },
};
</script>

<style scoped lang="scss">
.side-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6rem 8.75rem 6.188rem;
  width: 100%;
  height: 100%;
  background: $background;
  border-radius: 1.5rem 0 0 1.5rem;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
}

.footer {
  height: 6.25rem;
  padding-top: 1.875rem;
}
</style>
