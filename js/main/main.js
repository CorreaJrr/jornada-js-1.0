
import { getAllConfs } from "../utils/requestConf.utils.js";
const printCards = async () => {
  console.log('test')
  try {
    const mainDiv = document.getElementById('mainCardDiv');
    const confData = await getAllConfs();
    console.log(confData);
    confData.map((conf) => {
      const cardDiv = document.createElement('div');
      cardDiv.classList="mentorCards row justify-content-center";
      cardDiv.innerHTML = `
      <div class="bg-warning col-12 col-md-10 p-2 cardCustom">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${conf.título}</h5>
        <p class="card-text">${conf.orador}</p>
        <a href="#" class="btn btn-primary">Anotarse</a>
      </div>
    </div>`
    mainDiv.appendChild(cardDiv);
    })
  } catch (error) {
    console.log(error.message)
  }
}

printCards();