import Router from "vue-router";
import AppHome from "../components/AppHome";
import AppPrograms from "../components/AppPrograms";
import AppAssignment from "../components/AppAssignment";
import AppStudents from "../components/AppStudents";
import AppLogin from "../components/AppLogin";
const router = new Router({
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/home",
      component: AppHome,
    },
    {
      name: "programs",
      path: "/programs",
      component: AppPrograms,
    },
    {
      name: "assignments",
      path: "/assignments",
      component: AppAssignment,
    },
    {
      name: "students",
      path: "/students",
      component: AppStudents,
    },

    {
      name: "login",
      path: "/login",
      component: AppLogin,
    },
  ],
});

export default router;
