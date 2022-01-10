<template>
  <div>
    <form @submit.prevent="login">
      <label for="email"></label>Email:
      <input type="email" name="email" v-model="email" />

      <label for="password"></label>Password:
      <input type="password" name="password" v-model="password" />

      <button type="submit" name="button">Login</button>
    </form>
    <router-link :to="{ name: 'register' }">Don't have an account ? Register</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({
            name: 'dashboard',
          })
        })
    },
  },
}
</script>
