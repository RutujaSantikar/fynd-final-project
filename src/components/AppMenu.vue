<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light shadow p-3 mb-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Tutor Module</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link bg-hover" href="/programs">Programs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link bg-hover" href="/assignments">Assignments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link bg-hover" href="/students">Students</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Welcome <span><i class="fa-solid fa-chalkboard-user"></i> PuranikPrashant</span></a>
            </li>

            <li class="nav-item">
              <a class="nav-link bg-hover" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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

.navbar {
  /* background-color: #02457a; */
  background-color: #001b48;
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
  color: white;
  /* background-color:#001b48; */
  background-color: #02457a;
  border-radius: 5px;
}
</style>
