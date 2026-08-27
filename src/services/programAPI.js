import axios from "axios";

const PROGRAMS_API_URL = "http://localhost:5000/api/programs";

export async function getAllPrograms() {
  try {
    const response = await axios.get(PROGRAMS_API_URL);
    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to fetch programs";

throw new Error(message, { cause: error });
  }
}

