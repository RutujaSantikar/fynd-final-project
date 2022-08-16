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
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Assignment no 1
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Instructions:</strong>Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Vel debitis ullam laboriosam numquam
            veniam vero odio, doloremque cumque illo eum similique, in
            repellendus nesciunt esse, fugit suscipit fugiat sed voluptatibus
            assumenda omnis quaerat! Odit excepturi minima error voluptatum enim
            ea!
            <div><strong>Due Date:</strong>19-08-2022</div>
            <div><button class="btn btn-danger">Delete</button></div>
          </div>
        </div>
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
a {
  text-decoration: none;
  color: white;
}
.accordion {
  width: 80%;
  margin: 1em auto;
}
</style>
