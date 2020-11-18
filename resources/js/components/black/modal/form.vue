<template>
  <form class="billing-form" @click.prevent>
    <div class="billing-form__input">
      <label for="firstName">Enter your first name</label><br>
      <input type="text" id="firstName">
    </div>
    <div class="billing-form__input">
      <label for="lastName">Enter your last name</label><br>
      <input type="text" id="lastName">
    </div>
    <div class="billing-form__input">
      <label for="email">Enter your email</label><br>
      <input type="text" id="email">
    </div>
    <div class="billing-form__input">
      <label for="cardNumber">Enter your card number</label><br>
      <input type="text" id="cardNumber">
    </div>
    <div class="billing-form__input--small">
      <div class="small__input">
        <label for="expirationNumber">Expiration date</label><br>
        <input type="text" id="expirationNumber"> <br>
      </div>
      <div class="small__input">
        <label for="cvv">CVV code</label><br>
        <input type="text" id="cvv">
      </div>
    </div>
    <div class="billing-form__submit">
      <input type="submit" value="next">
    </div>
  </form>
</template>

<script>
export default {
name: "formComponent"
}
</script>

<style scoped lang="scss">
.billing-form {
&__input {
   width: 100%;
   margin: 10px 0;
   font-size: 14px;
label, input {
  width: 100%;
  margin: 5px;
  padding: 15px;
}
input {
  background-color: #EDEDED;
  border: none;
  outline: none;
}

&--small {
   display: flex;
   justify-content: space-between;
   align-items: center;

.small__input {
  width: 100%;
  max-width: 150px;
  margin: 10px 0;
  font-size: 14px;
label, input {
  width: 100%;
  margin: 5px;
  padding: 15px;
}
input {
  background-color: #EDEDED;
  border: none;
  outline: none;
}
}
}
}
&__submit {
input {
  width: 100%;
  padding: 15px;
  font-size: 24px;
  text-transform: uppercase;
  border: none;
  outline: none;
  background-color: black;
  color: white;
}
}
}
</style>