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
          username: username,
          password: password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then(async (result) => {
      localStorage.setItem("token", await result.data.token);
      return await result.data.token;
    })
    .catch(console.error);
};

export const getMe = async (token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const newPost = async (postDetails, token) => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: postDetails.title,
          description: postDetails.description,
          price: postDetails.price,
          location: postDetails.location,
          willDeliver: postDetails.willDeliver,
        },
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const updatePost = async (postDetails, token) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/${postDetails._id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: postDetails.title,
          description: postDetails.description,
          price: postDetails.price,
          location: postDetails.location,
          willDeliver: postDetails.willDeliver,
        },
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const deletePost = async (postId, token) => {
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};

export const newMessage = async (messageDetails, postId, token) => {
  console.log(postId, "postID");
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/posts/${postId}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: messageDetails,
        },
      }),
    }
  );
  const data = await response.json();
  return data;
};
