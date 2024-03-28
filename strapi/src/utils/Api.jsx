import axios from "axios";

var StripeKey = import.meta.env.VITE_APP_SERVER_API_TOKEN;

var params = {
  headers: {
    Authorization: "bearer " + StripeKey,
  },
};

export const fetchDataFromAPI = async (url) => {
  try {
    const URL = import.meta.env.VITE_APP_SERVER_BASE_URL;
    const { data } = await axios.get(URL + url, params);
    return data;
  } catch (error) {
    console.log("Fetch Data From API", error);
    return error;
  }
};
