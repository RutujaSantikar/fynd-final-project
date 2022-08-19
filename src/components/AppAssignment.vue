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
   
    <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Assignment no 1 on node js</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><strong>Instructions:</strong>{{text}}</b-card-text>
          <b-card-text><strong>Due Date:</strong>19-08-2022</b-card-text>
          <b-button variant="danger">Delete</b-button>
        </b-card-body>
      </b-collapse>
    </b-card>

    

    
  </div>
  </div>
</template>

<script>
export default {
  name: "AppAssignment",
  data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          r.
        `
      }
    }
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
.btn-info{
  width: 100%;
  background-color: #018abe;
  text-align: left;
  color: white;
}

@media (max-width:525px){
  .btn-create-assignment {
 
 padding: 0.7em;
  margin-left: 4em;
}

}
</style>
