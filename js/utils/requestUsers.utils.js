const URL = 'http://localhost:3000';

export const getAllUsers = async () => {
  try {
    const firstData = await fetch(`${URL}/usuarios`);
    const finalData = await firstData.json();
    return finalData;
  } catch (error) {
    return console.log(error.message);
  }
};

const getUsersById = async (id) => {
  try {
    const firstData = await fetch(`${URL}/usuarios/${id}`);
    const finalData = await firstData.json();
    return finalData;
  } catch (error) {
    return console.log(error.message);
  }
};

export const getUsersByEmail = async (email) => {
  try {
    const firstData = await fetch(`${URL}/usuarios/?email=${email}`);
    const finalData = await firstData.json();
    return finalData;
  } catch (error) {
    return console.log(error.message);
  }
};

const editUser = async (id) => {
  try {
    const { emailEdit, passwordEdit, avatarEdit } = formData;
    const editRequest = await fetch(`${URL}/usuarios/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        email: emailEdit,
        password: passwordEdit,
        avatar: avatarEdit,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const response = await editRequest.json();
    return response;
  } catch (error) {
    return console.log(error.message);
  }
};

export const createUser = async (data) => {
  try {
    const { email, password, userName } = data;
    const createRequest = await fetch(`${URL}/usuarios`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        userName: userName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const response = await createRequest.json();
    return response;
  } catch (error) {
    return console.log(error.message);
  }
};

const deleteUser = async (id) => {
  try {
    const deleteRequest = await fetch(`${URL}/usuarios/${id}`, {
      method: 'DELETE',
    });
    return deleteRequest;
  } catch (error) {
    return console.log(error.message);
  }
};

// post, patch, delete, getByID
