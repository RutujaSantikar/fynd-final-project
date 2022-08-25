<template>
  <div>
    <button type="submit" class="btn-create-program" id="createBtn">
      <i class="fa-solid fa-plus"></i
      ><a href="/programs/createprogram">Create Program</a>
    </button>
    <div class="container">
      <b-alert variant="success" v-if="this.$route.params.message" show>{{
        this.$route.params.message
      }}</b-alert>
      <div class="row">
        <div
          class="col-sm col-md col-lg"
          v-for="program in programs"
          :key="program._id"
        >
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="title card-title program-name">
                {{ program.program }}
              </h5>
              <h6 class="title card-subtitle teacher-name">
                {{ program.teacher }}
              </h6>
            </div>
            <div class="description program-description">
              {{ program.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../api";
export default {
  name: "AppPrograms",
  data() {
    return {
      programs: [],
    };
  },
  async created() {
    this.programs = await API.getAllPrograms();
  },
};
</script>

<style scoped>
* {
  font-family: "Tajawal", sans-serif;
}

a {
  text-decoration: none;
  color: white;
}
.btn-create-program {
  background-color: #001b48;
  color: white;
  padding: 0.9em;
  border-radius: 0.4em;
  border: none;
  margin-left: 10em;
}

.card-body {
  background-color: #018abe;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.title {
  color: white;
}
.description {
  padding: 0.7em;
}
.card {
  margin-top: 1.9em;
}
@media (max-width: 525px) {
  .btn-create-program {
    padding: 0.7em;
    margin-left: 5em;
  }
}
</style>
