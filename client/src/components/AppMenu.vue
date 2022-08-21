<template>
  <div>
    <b-navbar
      class="navbar bg-info shadow p-3 mb-5"
      toggleable="lg"
      variant="info"
    >
      <b-navbar-brand class="navbar-brand" href=""
        >Tutor Module</b-navbar-brand
      >

      <b-navbar-toggle
        class="navbar-toggler"
        target="nav-collapse"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-link bg-hover" href="/programs"
            >Programs</b-nav-item
          >
          <b-nav-item class="nav-link bg-hover" href="/assignments"
            >Assignments</b-nav-item
          >
          <b-nav-item class="nav-link bg-hover" href="/students"
            >Students</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="right"
            >Welcome
            <span
              ><i class="fa-solid fa-chalkboard-user"></i>PuranikPrashant</span
            ></b-nav-item
          >
          <b-button class="bg-logout" type="submit">Logout</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
};
</script>

<style scoped>
body {
  font-family: "Tajawal", sans-serif;
}
.bg-info {
  background-color: #001b48 !important;
}

.navbar-brand {
  color: #97cadb;
  font-weight: bold;
  letter-spacing: 0.1em;
}
span {
  color: #54c0cc;
}

.nav-link {
  color: #d6e8ee;
}
.bg-hover:hover {
  color: white !important;
  background-color: #018abe;
  border-radius: 5px;
}
.bg-logout {
  background-color: #54c0cc;
}
.navbar-toggler {
  background-color: #97cadb;
}
@media (max-width: 525px) {
  .navbar-toggler {
    font-size: 0.9em;
  }
}
</style>
