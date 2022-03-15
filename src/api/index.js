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
      localStorage.setItem("token", result.data.token);
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
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: createPost[0],
          description: createPost[1],
          price: createPost[2],
          willDeliver: createPost[3]
        },
      }),
    }
  ).then((response) => response.json).catch(console.error);
};

// export const gotToken = () => {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const currentToken = localStorage.getItem("token");
//     currentToken ? setToken(currentToken) : null;
//   }, []);

//   // console.log(token);
//   return token;
// };
