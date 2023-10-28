import { createUser, getUsersByEmail } from '../utils/requestUsers.utils.js';
import { formData } from '../utils/formData.utils.js';

const formularioRegister = document.getElementById('registerForm');

const userRegister = async (e) => {
  e.preventDefault();
  const inputEmail = document.getElementById('email');
  const inputPassword = document.getElementById('password');
  const inputPasswordCheck = document.getElementById('passwordCheck');

  inputEmail.classList.remove('is-invalid');
  inputEmail.classList.remove('is-valid');
  //------- regex
  const validationPassword = /^(?=.*\d).{4,8}$/;
  const data = formData(e);
  console.log(data);
  try {
    const [userExist] = await getUsersByEmail(data.email);
    if (userExist) {
      return inputEmail.classList.add('is-invalid');
    } else {
      inputEmail.classList.add('is-valid');
    }

    if (data.password !== data.passwordCheck) {
      inputPasswordCheck.classList.add('is-invalid');
      inputPassword.classList.add('is-invalid');
    } else {
      inputPassword.classList.add('is-valid');
      inputPasswordCheck.classList.add('is-valid');
    }
    await createUser(data);
  } catch (error) {
    console.log(error);
  }
  // try {
  //   console.log(nuevoUsuario);
  //   console.log(nuevoUsuario);
  //   // ------ validaciones
  //   if (!validationEmail.test(data.email)) {
  //     inputEmail.classList.add('is-invalid');
  //   } else {
  //     inputEmail.classList.remove('is-valid');
  //   }

  // const emailExist = users.some((user) => user.email === formData.email);
  // if (emailExist) return (messageForm.textContent = messages.userIsRegister);

  // const userNameExist = users.some(
  //   (user) => user.userName === formData.userName
  // );
  // if (userNameExist) return (messageForm.textContent = messages.userNameExist);

  // const userExist = users.some((user) => user.userName === formData.email);
  // if (userExist) return (messageForm.textContent = messages.userIsRegister);

  // if (formData.password !== formData.passwordCheck)
  //   return (messageForm.textContent = messages.passwordMatchFail);

  // if (!validationPassword.test(formData.password)) {
  //   messageForm.textContent = messages.passwordRequirement;
  // }

  // window.location.href = './login.html';
  // } catch (error) {
  //   console.log(error);
  // }
};

formularioRegister.addEventListener('submit', userRegister, false);
