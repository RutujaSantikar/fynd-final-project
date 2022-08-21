<template>
  <div class=" register-container">
      <div class="register-card">
      
        <form action="" id="register-form" class=" user-register-form">
          <div><label for="firstName">Name</label></div>
          <input type="name" name="userFirstName" id="userFirstName"/>
          <div><label for="email">Email</label></div>
          <input type="email" name="userEmail" id="useremail"/>
          <div><label for="password">Password</label></div>
          <input type="password" name="userPassword" id="userpassword" />
          <div><label for="ConfirmPassword">Confirm Password</label></div>
          <input type="password" name="userConfirmPassword" id="userConfirmPassword">
          <div><button type="submit" class="register-btn">Register</button></div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    name:'AppRegister'

}
</script>

<style scoped>
body {
  background-color: lightgray;
  font-family: "Tajawal", sans-serif;
}
.register-container {
  width: 30%;
  margin: 5em auto;
}
.register-card {
  background-color: white;
  box-shadow: 2px 2px 5px 2px lightslategrey;

  border-radius: 2px;
}
input {
  width: 100%;
  padding: 0.4em;

  border-radius: 15px;
  outline-style: none;
  border: 1px solid lightgray;
}
.user-register-form {
  color: #001b48;
  font-weight: 530;
  padding: 2em;
}
.user-register-form div {
  margin: 0.8em 0em;
}
.register-btn {
  background-image: linear-gradient(
    to right top,
    #001b48,
    #012251,
    #012a5a,
    #023264,
    #023a6d,
    #024377,
    #014c82,
    #00568c,
    #006399,
    #0070a5,
    #007db2,
    #018abe
  );
  border: none;

  border-radius: 15px;

  color: white;
  font-size: 1em;
  padding: 0.7em;
  margin-top: 0.4em;
  width: 100%;
}
.center{
  text-align: center;
}

@media (max-width: 525px) {
  .register-container {
    width: 50%;
    margin: 12em auto;
  }
  input {
    width: 100%;
    padding: 0.3em;
  }
  .user-register-form {
    font-weight: 500;
    padding: 1.8em;
  }
  .user-register-form div {
    margin: 0.6em 0em;
  }
  .register-btn {
    background-image: linear-gradient(
      to right top,
      #001b48,
      #012251,
      #012a5a,
      #023264,
      #023a6d,
      #024377,
      #014c82,
      #00568c,
      #006399,
      #0070a5,
      #007db2,
      #018abe
    );
    border: none;

    border-radius: 15px;

    color: white;
    font-size: 1em;
    padding: 0.6em;
    margin-top: 0.2em;
    width: 100%;
  }
}
</style>