// Backend server URL obtained from environment variable
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// Create a message
export const createMessage = async (contactData) => {
  try {
    if (!BACKEND_URL) {
      throw new Error("Backend URL is not configured (VITE_BACKEND_URL)");
    }
    const res = await fetch(`${BACKEND_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    if (!res.ok) {
      throw new Error("Failed to create message");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating message", error);
    throw error;
  }
};
