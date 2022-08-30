<template>
  <div>
    <button
      type="submit"
      class="btn-create-assignment"
      id="create-assignment-btn"
    >
      <i class="fa-solid fa-plus"></i
      ><a href="/assignments/createassignments"> Create Assignment</a>
    </button>
    <b-alert variant="success" v-if="this.$route.params.message" show>{{
      this.$route.params.message
    }}</b-alert>
    <div
      class="accordion"
      role="tablist"
      v-for="assignment in assignments"
      :key="assignment._id"
    >
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            ><strong>Assignment on:</strong>{{ assignment.title }}</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text
              ><strong>Instructions:</strong
              >{{ assignment.instructions }}</b-card-text
            >
            <b-card-text
              ><strong>Due Date:</strong>{{ assignment.dueDate }}</b-card-text
            >
            <b-button variant="danger" @click="removeAssignment(assignment._id)"
              >Delete</b-button
            >
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import API from "../assignments.api";
export default {
  name: "AppAssignment",
  data() {
    return {
      assignments: [],
    };
  },
  async created() {
    this.assignments = await API.getAllAssignments();
  },

  methods: {
    async removeAssignment(id) {
      const response = await API.deleteAssignment(id);
      this.$router.push({
        name: "assignments",
        params: { message: response.message },
      });
    },
  },
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
a {
  text-decoration: none;
  color: white;
}

.accordion {
  width: 80%;
  margin: 1em auto;
}
.btn-info {
  width: 100%;
  background-color: #018abe;
  text-align: left;
  color: white;
}

@media (max-width: 525px) {
  .btn-create-assignment {
    padding: 0.7em;
    margin-left: 4em;
  }
}
</style>
