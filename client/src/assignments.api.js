import axios from "axios";
const url = "/api/assignments";

export default class API {
  static async getAllAssignments() {
    const res = await axios.get(url);
    return res.data;
  }
  static async getAssignmentByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }
  static async addAssignment(assignment) {
    const res = await axios.post(url, assignment);
    return res.data;
  }

  static async deleteAssignment(id)
  {
    const res= await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
