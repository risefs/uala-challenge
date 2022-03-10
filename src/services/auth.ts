export const login = (email: string, password: string) => {
  if (email === "uala" && password === "uala") {
    return {
      user: "uala",
      status: 200,
    };
  }
  return {
    error: "usuario o password invalid",
    status: 400,
  };
};

export const logOut = () => true;
