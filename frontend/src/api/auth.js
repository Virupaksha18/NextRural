export const login = async (email, password) => {
  try {
    const response = await fetch("https://nextrural.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Server not responding" };
  }
};
