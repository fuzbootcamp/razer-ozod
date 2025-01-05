let main = document.querySelector('.main');
let url = 'https://razer-api.onrender.com/devices';

async function getAPI() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  htmlga(data);
}
getAPI();

function htmlga(data) {
  let html = '';
  data.map((el) => {
    html += `
        <div class="card">
        <img src=${el.image} alt="" />
        <h3>${el.name}</h3>
        </div>
        `;
    main.innerHTML = html;
  });
}
