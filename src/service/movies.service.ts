import axios from "axios";
import config from "config";


export async function fetchAllVideos() {
  const baseUrl = config.get<string>("swapi.base_url");

  try {
    const response = await axios.get(`${baseUrl}/films`, {
    });

    if (response.status === 200) {
      return { error: null, data: response.data };
    }
  } catch (error: any) {
    return { error: error.response.data, data: null };
  }
}
