import axs from ".";

export const login = async (email, password) => {
  return await axs.post("/login", { email, password });
};

export const signup = async (name, email, password) => {
  const { data } = await axs.post("/register", { name, email, password });
  return data;
};

export const getProfile = async () => {
  const { data } = await axs.get("/loggedInUser");
  return data;
};
