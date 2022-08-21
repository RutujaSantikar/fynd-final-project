<template>
  <div>
    <div class="login-container">
      <div class="login-card">
        <form action="" id="login-form" class="user-login-form">
          <div><label for="email">Email</label></div>
          <input type="email" name="userEmail" id="useremail" />
          <div><label for="password">Password</label></div>
          <input type="password" name="userPassword" id="userpassword" />
          <div><button type="submit" class="login-btn">Login</button></div>
          <p class="center">Need an account <a href="/register">Register Here</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLogin",
};
</script>

<style scoped>
body {
  background-color: lightgray;
  font-family: "Tajawal", sans-serif;
}
.login-container {
  width: 30%;
  margin: 5em auto;
}
.login-card {
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
.user-login-form {
  color: #001b48;
  font-weight: 530;
  padding: 2em;
}
.user-login-form div {
  margin: 0.8em 0em;
}
.login-btn {
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
  .login-container {
    width: 50%;
    margin: 12em auto;
  }
  input {
    width: 100%;
    padding: 0.3em;
  }
  .user-login-form {
    font-weight: 500;
    padding: 1.8em;
  }
  .user-login-form div {
    margin: 0.6em 0em;
  }
  .login-btn {
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

