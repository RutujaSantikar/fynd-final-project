<template>
  <div class="create-program-container">
    <div class="create-program-card">
      <form action="" id="createProgramForm" class="create-program-form">
        <div><label for="programName">Program Name</label></div>
        <input
          type="text"
          name="programName"
          id="program-Name"
          placeholder="ex.MEVN stack"
        />
        <div><label for="programDes">Description</label></div>
        <textarea
          name="programDescription"
          id="program-Description"
          cols="30"
          rows="2"
          placeholder="Short description about program"
        ></textarea>

        <div><label for="text">Teacher Name</label></div>
        <input
          type="text"
          name="teacherName"
          id="teacher-Name"
          placeholder="ex.Puranik Prashant"
        />
        <div><button type="submit" class="create-btn">Create</button></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateProgram",
};
</script>

<style scoped>
* {
  font-family: "Tajawal", sans-serif;
}
.create-program-container {
  width: 40%;
  margin: 2em auto;
}
.create-program-card {
  background-color: white;
  /* box-shadow: 2px 2px 5px 2px lightslategrey; */
  border: 1px solid lightgray;

  border-radius: 6px;
}
input,
textarea {
  width: 100%;
  padding: 0.7em;
  /* border-radius: 4px; */
  border-radius: 15px;
  outline-style: none;
  border: 1px solid lightgray;
}
.create-program-form {
  color: #001b48;
  font-weight: 530;
  padding: 2em;
}
.create-program-form div {
  margin: 0.8em 0em;
}
.create-btn {
  /* background-color: #02457a; */
  background-color: #002d40;
  border: none;
  border-radius: 15px;

  color: white;
  font-size: 1em;
  padding: 0.9em;
  margin-top: 0.4em;
  width: 100%;
}
@media (max-width: 525px) {
  .create-program-container {
    width: 80%;
    margin: 2em auto;
  }
}
</style>
