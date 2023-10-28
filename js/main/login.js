import { formData } from '../utils/formData.utils.js';
import { getUsersByEmail } from '../utils/requestUsers.utils.js';
const formulario = document.getElementById('loginForm');

const login = async (e) => {
  e.preventDefault();
  const data = formData(e);
  console.log(data);
  try {
    const [user] = await getUsersByEmail(data.email);
    console.log(user)
    if (user) {
      localStorage.setItem("user", "true")
      // window.location.href='./index.html'
    } else {
      alert('Usuario no registrado');
    }
  } catch (error) {
    console.log(error);
  }
};

formulario.addEventListener('submit', login);