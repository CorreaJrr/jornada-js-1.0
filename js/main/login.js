import { formData } from './js/utils/formData.utils.js';
import { getUsersByEmail } from './js/utils/requestUser.utils.js';
const formulario = document.getElementById('loginForm');

const login = async (e) => {
  e.preventDefault();
  const data = formData(e);
  console.log(data);
  try {
    const [user] = await getUsersByEmail(data.email);
    if (user) {
      localStorage.setItem("user", "true")
      location.href('/index.html');
    } else {
      alert('Usuario no registrado');
    }
  } catch (error) {
    console.log(error);
  }
};

formulario.addEventListener('submit', login);