import axios from "axios";
const url = "/api/programs";

export default class API {
  static async getAllPrograms() {
    const res = await axios.get(url);
    return res.data;
  }

  static async getProgramsByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  static async addProgram(program) {
    const res = await axios.post(url,program);
    return res.data;
  }


}
