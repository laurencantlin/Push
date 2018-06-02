
import axios from "axios";

export default {

    getFoodItems: function () {
        console.log("fooditmes");
        return axios.get("/api/foodItems");
      },
}