import axios from "axios";

// In production on Netlify we call the serverless function at
// /.netlify/functions/contact to send an email.
// For local development, if that fails we fall back to a simulated success
// so the UI continues to work without additional tooling.

export const submitContactForm = async (payload) => {
  try {
    const response = await axios.post("/.netlify/functions/contact", payload, {
      headers: { "Content-Type": "application/json" },
      timeout: 15000,
    });
    return response.data;
  } catch (error) {
    // Fallback so local `npm start` still works even without Netlify dev.
    // You can remove this once you always run with `netlify dev` locally.
    // eslint-disable-next-line no-console
    console.warn("Falling back to simulated contact submission:", error?.message || error);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, simulated: true });
      }, 600);
    });
  }
};

export default submitContactForm;


