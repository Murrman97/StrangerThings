// Holds api key
export const registerUser = async (username, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.data.token);
      return result.data.token;
    })
    .catch(console.error);
};

export const loginUser = async (username, password) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.getItem("token", result.data.token);
      return result.data.token;
    })
    .catch(console.error);
};

export const newPost = async (createPost, token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: createPost,
      }),
    }
  ).then((response) => response.json);
};
