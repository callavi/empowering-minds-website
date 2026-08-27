import axios from "axios";

const CONTACT_API_URL = "http://localhost:5000/api/contact";

export async function submitContactForm(formData) {
  try {
    const response = await axios.post(CONTACT_API_URL, formData);
    return response.data;
  } catch (error) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to submit inquiry";

throw new Error(message, { cause: error });
  }
}

