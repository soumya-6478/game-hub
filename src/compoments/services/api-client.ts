import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e57aee59faf848e38fcfcb039726bbfb",
  },
});
