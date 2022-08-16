<template>
  <div>
    <button
      type="submit"
      class="btn-create-assignment"
      id="create-assignment-btn"
    >
      Create Assignment
    </button>
    <div class="create-assignment-container">
      <div class="create-assignment-card">
        <form
          action=""
          id="createAssignmentForm"
          class="create-assignment-form"
        >
          <div><label for="assignmentName">Title</label></div>
          <input type="text" name="assignmentName" id="assignment-Name" />
          <div><label for="instructions">Instructions</label></div>
          <textarea
            name="assignInstructions"
            id="assignment-instructions"
            cols="30"
            rows="2"
          ></textarea>
          <div><label for="due-date">Due Date</label></div>
          <input type="date" name="dueDate" id="dueDate" />
          <div><button type="submit" class="create-btn">Create</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAssignment",
};
</script>

<style scoped>
* {
  font-family: "Tajawal", sans-serif;
}
.btn-create-assignment {
  background-color: #001b48;
  color: white;
  padding: 0.9em;
  border-radius: 0.4em;
  border: none;
  margin-left: 10em;
}
.create-assignment-container {
  width: 40%;
  margin: 5em auto;
}
.create-assignment-card {
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
.create-assignment-form {
  color: #001b48;
  font-weight: 530;
  padding: 2em;
}
.create-assignment-form div {
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
</style>
