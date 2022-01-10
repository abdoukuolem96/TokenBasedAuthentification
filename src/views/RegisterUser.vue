<template>
  <div>
    <form @submit.prevent="registe">
      <label for="name"></label>Name:
      <input type="text" name="name" v-model="name" />

      <label for="email"></label>Email:
      <input type="email" name="email" v-model="email" />

      <label for="password"></label>Password:
      <input type="password" name="password" v-model="password" />

      <button type="submit" name="submit">Register</button>
      <router-link :to="{ name: 'login' }">Already have an account ? Login</router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    registe() {
      const credentials = {
        name: this.name,
        email: this.email,
        password: this.password,
      }

      this.register(credentials)
        .then(() => {
          this.$router.push({
            name: 'dashboard',
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions(['register']),
  },
}
</script>
