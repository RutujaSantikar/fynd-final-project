import Router from "vue-router";
import AppHome from "../components/AppHome";
import AppPrograms from "../components/AppPrograms";
import CreateProgram from "../components/CreateProgram";
import AppAssignment from "../components/AppAssignment";
import CreateAssignment from "../components/CreateAssignment"
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
      name: "createprogram",
      path: "/programs/createprogram",
      component: CreateProgram,
      
    },
    {
      name: "assignments",
      path: "/assignments",
      component: AppAssignment,
    },
    {
      name: "assignments",
      path: "/assignments/createassignments",
      component: CreateAssignment,
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
