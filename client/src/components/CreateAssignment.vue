<template>
  <div class="create-assignment-container">
    <div class="create-assignment-card">
      <form
        action=""
        v-on:submit.prevent="submitForm"
        id="createAssignmentForm"
        class="create-assignment-form"
        ref="form"
      >
        <div><label for="assignmentName">Title</label></div>
        <input
          type="text"
          v-model="assignment.title"
          name="assignmentName"
          id="assignment-Name"
        />
        <div><label for="instructions">Instructions</label></div>
        <textarea
          name="assignInstructions"
          v-model="assignment.instructions"
          id="assignment-instructions"
          cols="30"
          rows="2"
        ></textarea>
        
        <div><label for="due-date">Due Date</label></div>
        <input
          type="text"
          name="dueDate"
          v-model="assignment.dueDate"
          id="dueDate"
        />
        
        <div><button type="submit" class="create-btn">Create</button></div>
      </form>
    </div>
  </div>
</template>

<script>
import API from "../assignments.api";
export default {
  name: "CreateAssignment",

  data() {
    return {
      assignment: {
        title: "",
        instructions: "",
        dueDate: "",
      },
    };
  },

  methods: {
    async submitForm() {
      const formData = new FormData();
      formData.append("title", this.assignment.title);
      formData.append("instructions", this.assignment.instructions);
      formData.append("dueDate", this.assignment.dueDate);
      if (this.$ref.form.validate()) {
        const response = await API.addAssignment(formData);
        this.$router.push({
          name: "assignments",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Tajawal", sans-serif;
}
.create-assignment-container {
  width: 40%;
  margin: 2em auto;
}
.create-assignment-card {
  background-color: white;
  border: 1px solid lightgray;

  border-radius: 6px;
}
input,
textarea {
  width: 100%;
  padding: 0.7em;
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
  .create-assignment-container {
    width: 80%;
    margin: 2em auto;
  }
}
</style>
