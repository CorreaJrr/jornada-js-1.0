export const formData = (e) => {
  const dataFormulario = new FormData(e.target);
  const finalData = Object.fromEntries(dataFormulario.entries());
  return finalData;
};