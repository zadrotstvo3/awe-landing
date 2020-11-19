<template>
  <div class="login">
    <form class="login__form" @click.prevent>
      <div class="login__error" v-if="error">
        <p class="error">Failed! Please check if login and password is correct!</p>
      </div>
      <div class="login__input">
        <label class="login__name" for="name">Login</label>
        <input class="text" type="text" id="name" v-model="userName">
      </div>
      <div class="login__input">
        <label class="login__name" for="password">Password</label>
        <input class="text" type="text" id="password" v-model="userPassword">
      </div>
      <div class="login__input">
        <input class="button" type="submit" value="Enter" @click="submitLogIn">
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "logIn",
  data(){
    return {
      userName: '',
      userPassword: '',
      error: false
    }
  },
  methods: {
    submitLogIn(){
      if(this.userName === 'admin' && this.userPassword === 'admin'){
            this.$axios.get('/airlock/csrf-cookie').then(response => {console.log(response)})
            this.$router.push('/admin-panel')
      } else {
            return  this.error = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  &__form {
    width: 100%;
    max-width: 450px;
    padding: 35px;
    border: 1px solid black;
    border-radius: 30px;
    background-color: #fff;
  }

  &__input {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-size: 24px;
  }
  &__error {
    padding: 15px 0;
    color: red;
  }
}
.text {
  margin-bottom: 20px;
  padding: 15px;
  outline: none;
}
.button {
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  padding: 15px;
  font-size: 18px;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: #000000;
  outline: none;
  color: white;
  transition: .3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #fff;
    border: 1px solid black;
  }
}
</style>
