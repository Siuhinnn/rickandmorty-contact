import axios from "./apiHelper";

const characterHelper = {
  getAllCharacter: async (variables) => {
    try {
      const result = await axios.get(`/character`, { params: variables });
      //if result is empty
      if (!result.data) {
        throw new Error("Fail to get data");
      }
      return result.data;
    } catch (e) {
      if (e.response) {
        return { error: e.response.status };
      }
      return { error: "unknown error" };
    }
  },
  getSingleCharacter: async (variables) => {
    try {
      const result = await axios.get(`/character/${variables}`);
      //if result is empty
      if (!result.data) {
        throw new Error("Fail to get data");
      }
      return result.data;
    } catch (e) {
      if (e.response) {
        return { error: e.message };
      }
      return { error: "unknown error" };
    }
  },
  getEpisodeInfo: async (variables) => {
    try {
      const result = await axios.get(`${variables}`);
      //if result is empty
      if (!result.data) {
        throw new Error("Fail to get data");
      }
      return result.data;
    } catch (e) {
      if (e.response) {
        return { error: e.message };
      }
      return { error: "unknown error" };
    }
  },
};

export default characterHelper;
