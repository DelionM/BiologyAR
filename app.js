
(() => {
  const modelViewer = document.querySelector('#orbit-demo');
  const orbitCycle = [
    '45deg 55deg 10m',
    '45deg 20deg 20m',
    modelViewer.cameraOrbit
  ];

  setInterval(() => {
    const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
    modelViewer.cameraOrbit =
      orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
  }, 3000);
})();


function toggleMobileMenu() {
  var menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
}

window.addEventListener('scroll', function () {
  var menu = document.querySelector('.menu');
  if (window.scrollY > 50) {
    menu.classList.add('bg-black', 'shadow-md');
  } else {
    menu.classList.remove('bg-black', 'shadow-md');
  }
});

const imagen = document.getElementById("cellRandom");
const tituloImagen = document.getElementById("title");
const linkImagen = document.getElementById("linkViaGIPHY");
const autor = document.getElementById("autor");
const temaBuscar = document.getElementById("tema");


const apikey = "1zgKLVAdY672VtZdMwBT2Jl3XidzMQI3"
// const tema = "biology cells"
// const tema2 = "biology animal cells"
// const tema3 = "biology plant cells"
// const tema4 = ""
const limit = 20;

const getRandomImage = async (TemaImagen) => {

  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${TemaImagen}&limit=${limit}&offset=0&rating=g&lang=es&bundle=messaging_non_clips`
    );
    const data = await res.json();

    randomIndex = Math.floor(Math.random() * limit);

    const imagenRandom = {
      autor: data.data[randomIndex].username,
      urlViaGIPHY: data.data[randomIndex].url,
      img: data.data[randomIndex].embed_url,
      titulo: data.data[randomIndex].title
    };
    
    temaBuscar.innerHTML = TemaImagen;
    linkImagen.href = imagenRandom.urlViaGIPHY;
    imagen.src = imagenRandom.img;
    tituloImagen.innerHTML = imagenRandom.titulo;
    autor.innerHTML = `Autor: ${imagenRandom.autor}`;

  } catch (error) {
    console.log(error);
  }
};


const getRandomeTema = () => {
  randomTemas = [tema, tema2, tema3, tema4];
  randomIndex = Math.floor(Math.random() * 4);
  getRandomImage(randomTemas[randomIndex]);
};

document.addEventListener("DOMContentLoaded", () => {
  getRandomeTema()
});

document.getElementById("btnRandom").addEventListener("click", () => {
  getRandomeTema()
});

