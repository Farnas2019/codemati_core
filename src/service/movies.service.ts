import axios from "axios";
import config from "config";


export async function fetchAllMovies() {
  const baseUrl = config.get<string>("SWAPI.base_url");

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
