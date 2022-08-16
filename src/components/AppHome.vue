<template>
  <div class="user-accounts">
      <h3>Choose your account</h3>
      <div class="account-type">
        <div class="tutor-account">
          <div class="tutor-card">
            <i class="fa-solid fa-chalkboard-user"></i>
          </div>
        </div>
        <div class="padding"></div>
        <div class="student-account">
          <div class="student-card"><i class="fa-solid fa-user"></i></div>
        </div>
      </div>

      <p>Already have an account ? <a href="#">Login Here</a></p>
    </div>
</template>

<script>
export default {
  name: 'AppHome'
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
body{
background-color:lightgray;
font-family: "Tajawal", sans-serif;
}
p {
  color: #4b91a9;
}

.user-accounts {
  width: 50%;
  margin: 5em auto;
  text-align: center;
}

.tutor-card {
  background-color: #02457a;
  border-radius: 5px;
  padding: 5em 3em;
}
.fa-solid {
  color: #02457a;
  /* background-color: #97CADB; */
  background-image: linear-gradient(
    to right top,
    #d6e8ee,
    #cae2ea,
    #bfdde7,
    #b3d7e3,
    #a7d1e0,
    #99c9dc,
    #8ac2d7,
    #7bbad3,
    #65aecd,
    #4ea2c8,
    #3396c3,
    #018abe
  );
  font-size: 2.5em;
  border-radius: 11em;
  padding: 1em;
}

.student-card {
  background-color: #018abe;
  border-radius: 5px;
  padding: 5em 3em;
}
.account-type {
  display: flex;
  justify-content:space-evenly;
  margin: 1.5em;
}

@media (max-width:525px) {

  .tutor-card {
    background-color: #02457a;
    border-radius: 5px;
    padding: 4em 2em;
  }
  .student-card {
    background-color: #018abe;
    border-radius: 5px;
    padding: 4em 2em;
  }
  .fa-solid{
    font-size: 1.9em;
    padding: 0.5em;
  }
  .account-type{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1.5em;
  
  }
  .padding{
    padding: 0.5em;
  }
  
}
</style>
