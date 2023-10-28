const URL = "http://localhost:3000"

const getAllConfs = async () => {
  try {
    const firstData = await fetch(`${URL}/charlas`);
    const finalData = await firstData.json();
    return console.log(finalData);
  } catch (error) {
    return console.log(error.message);
  }
};

const getConfById = async (id) => {
  try {
    const firstData = await fetch(`${URL}/charlas/${id}`);
    const finalData = await firstData.json();
    return console.log(finalData);
  } catch (error) {
    return console.log(error.message);
  }
}