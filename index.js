class AnimalCard {
  constructor(image, title, text, link) {
    this.image = image;
    this.title = title;
    this.text = text;
    this.link = link;
  }

  createCard() {
    const adminCard = document.createElement("div");
    adminCard.classList.add("col-12", "col-md-4", "my-5");

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = this.image;
    img.alt = "";
    card.appendChild(img);

    const body = document.createElement("div");
    body.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = this.title;
    body.appendChild(title);

    const text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = this.text;
    body.appendChild(text);

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("d-grid", "col-12");

    const link = document.createElement("a");
    link.href = this.link;
    link.classList.add("btn");
    link.textContent = "Ver más";
    linkContainer.appendChild(link);

    body.appendChild(linkContainer);
    card.appendChild(body);
    adminCard.append(card);

    return adminCard;
  }
}

const animals = [
  {
    image: "img/nutria.png",
    name: "Nutria",
    description:
      "Las nutrias son animales semiacuáticos, solitarios y nocturnos, se alimentan principalmente de peces, crustáceos y moluscos. Son importantes para el ecosistema acuático, pero algunas especies están en peligro debido a la pérdida de hábitat y caza.",
    link: "./animales/nutrias.html",
  },
  {
    image: "img/tortuga.png",
    name: "Tortuga",
    description:
      "Las tortugas son reptiles con cáscara protectora que viven en ambientes acuáticos y terrestres, algunas especies son endémicas y suelen tener una longevidad de más de 30 años, desafortunadamente, muchas especies están en peligro de extinción debido a la actividad humana.",
    link: "./animales/tortugas.html",
  },
  {
    image: "img/medusa.png",
    name: "Medusa",
    description:
      "Las medusas son animales acuáticos invertebrados con tentáculos venenosos, viven principalmente en agua salada, son importantes en el ecosistema marino pero algunas especies están en peligro debido a la actividad humana, como la contaminación y la sobrepesca.",
    link: "./animales/medusa.html",
  },
  {
    image: "img/Tiburon-martillo.png",
    name: "Tiburon Martillo",
    description:
      "Los tiburones martillo tienen una cabeza en forma de martillo y una aleta dorsal plana en forma de T, se alimentan de peces y crustáceos, son comunes en aguas cálidas y templadas del mundo, y a menudo se pueden ver cerca de la superficie, atrayendo a buceadores.",
    link: "./animales/tiburon-martillo.html",
  },
  {
    image: "img/Dragon-mar.png",
    name: "Dragones de Mar",
    description:
      "Los dragones del mar son peces voladores conocidos por saltar fuera del agua y volar con alas alargadas y cola en forma de lemmon, encontrados en aguas cálidas y templadas del mundo, se alimentan de peces y cefalópodos, solitarios y tienen una apariencia impresionante.",
    link: "./animales/dragon-de-mar.html",
  },
  {
    image: "img/Manta-gigante.png",
    name: "Mantas Gigantes",
    description:
      "Las mantas gigantes son animales marinos filtradores de gran tamaño, con alas de hasta 7 metros de envergadura, se encuentran en aguas cálidas y templadas, son solitarias y se alimentan principalmente de plancton. Son una especie en peligro de extinción debido a la contaminación.",
    link: "./animales/manta-gigante.html",
  },
  {
    image: "img/Estrella-de-mar.png",
    name: "Estrella de Mar",
    description:
      "Las estrellas de mar son animales marinos invertebrados con forma de estrella, tienen cinco o más brazos y se encuentran en todos los océanos del mundo, son importantes para el ecosistema marino y se alimentan principalmente de algas y detritos. Sin embargo, están en peligro debido a la sobrepesca y la contaminación.",
    link: "./animales/estrellas.html",
  },
  {
    image: "img/Ballena.png",
    name: "Ballenas",
    description:
      "Las ballenas son mamíferos acuáticos de gran tamaño, con variedad de especies como ballena azul, ballena jorobada, ballena franca austral y ballena gris. Se alimentan principalmente de plancton, krill y peces pequeños. Son animales sociales y comunicativos, y están en peligro de extinción debido a la pesca.",
    link: "animales/ballenas.html",
  },
  {
    image: "img/Coral.png",
    name: "Coral",
    description:
      "Los corales son organismos marinos que forman colonias y crean arrecifes de coral. Son importantes para el ecosistema marino y sirven como hogar para una gran variedad de vida marina. Son sensibles a las variaciones de temperatura y pH del agua. Sin embargo, están en peligro debido al calentamiento global y la contaminación.",
    link: "./animales/coral.html",
  },
  {
    image: "img/Delfin.png",
    name: "Delfin",
    description:
      "Los delfines son mamíferos acuáticos inteligentes y sociales, se encuentran en todos los océanos del mundo y se caracterizan por su gran capacidad de comunicación y nadar a gran velocidad. A menudo son considerados animales sagrados en algunas culturas y son objeto de estudio en investigaciones científicas.",
    link: "./animales/delfin.html",
  },
  {
    image: "img/Tiburon-toro.png",
    name: "Tiburon Toro",
    description:
      "Los tiburones toro son una especie de tiburón de tamaño mediano, con un cuerpo fuerte y musculoso y una cabeza ancha y aplanada. Se encuentran en aguas cálidas y templadas de todo el mundo y son conocidos por su agresividad y capacidad para nadar en aguas poco profundas. Ellos no atacan con frecuencia a los humanos.",
    link: "./animales/tiburon-toro.html",
  },
  {
    image: "img/pinguino.png",
    name: "Pingüinos",
    description:
      "Los pingüinos son aves acuáticas que viven principalmente en el hemisferio sur. Tienen un cuerpo adaptado para nadar y caminar sobre hielo y nieve. Existen 18 especies de pingüinos, cada una con características únicas, como el tamaño, el color y el hábitat. Están en peligro debido a la pesca indiscriminada y la contaminación.",
    link: "./animales/pinguinos.html",
  },
  {
    image: "img/pez-payaso.png",
    name: "Pez Payaso",
    description: "El pez payaso es un pez marino colorido y simpático que vive en arrecifes de coral. Es conocido por su relación mutualista con anémonas, en la cual el pez se refugia dentro de las anémonas y se protege de los depredadores.",
    link: "./animales/pez-payaso.html"
  },
  {
    image: "img/leon-marino.png",
    name: "Leon marino",
    description: "Los leones marinos son animales imponentes que viven en las costas de América del Norte y del Sur. Son excelentes nadadores y cazadores, y su dieta se compone principalmente de peces y mariscos. A pesar de su nombre, estos animales no son leones sino focas, y su población ha disminuido debido a la caza y la contaminación.",
    link: "./animales/leon-marino.html"
  },
  {
    image: "img/frailecillo.png",
    name: "Frailecillo",
    description: "Los frailecillos son una especie de ave marina que vive en las costas de América del Norte y del Sur. Son conocidos por su aspecto característico, con un cuerpo alargado y una cresta de plumas en la cabeza. Se alimentan principalmente de crustáceos y pequeños peces. Su población se ha visto afectada por la pesca y la destrucción de su hábitat.",
    link: "./animales/frailecillo.html"
  },
  {
    image: "img/foca-gris.png",
    name: "Foca gris",
    description: "Los focas grises son animales marinos de gran tamaño que se encuentran en las costas del Ártico y el Atlántico Norte. Se alimentan principalmente de peces y crustáceos y son animales solitarios y territoriales. A pesar de su gran tamaño, son animales ágiles y buenos nadadores. Aunque su población ha disminuido debido a la caza y la contaminación, todavía se encuentran en varias partes del mundo.",
    link: "./animales/foca-gris.html"
  },
  {
    image: "img/pez-leon.png",
    name: "Pez leon",
    description: "Los peces león son una especie de peces marinos que se encuentran en el océano Indo-Pacífico. Son conocidos por su aspecto con espinas y su cola leonada. Son animales solitarios y territoriales que se alimentan principalmente de crustáceos y moluscos. A menudo se encuentran en arrecifes de coral y son una popular atracción turística debido a su colorido y curioso aspecto.",
    link: "./animales/pez-leon.html"
  },
  {
    image: "img/caballo-mar.png",
    name: "Caballito de mar",
    description: "Los caballitos de mar son animales marinos con forma de pez, pero con una cola anfibia que les permite moverse en la superficie del agua y en la playa. Son muy coloridos y tienen una gran variedad de especies. Son animales hermosos y populares entre los buzos.",
    link: "./animales/caballito-mar.html"
  },
  {
    image: "img/pez-betta.png",
    name: "Pez betta",
    description: "El Pez Betta es un pez tropical de agua dulce que se caracteriza por su cola y aletas largas y vistosas. Es nativo de Asia y se encuentra en ríos y arroyos de Tailandia, Laos, Camboya y Vietnam. Es un pez solitario y territorial, pero es popular como pez de acuario debido a su belleza y personalidad.",
    link: "./animales/pez-betta.html"
  },
  {
    image: "img/pez-cirujano.png",
    name: "Pez cirujano",
    description: "Los peces cirujanos son una especie de peces de arrecife tropicales, conocidos por sus colores vibrantes y su habilidad para moverse rápidamente. Son una atracción popular en acuarios debido a su belleza y personalidad. También son importantes en la ecología del arrecife, alimentándose de algas y contribuyendo a la salud del ecosistema.",
    link: "./animales/pez-cirujano.html"
  },
  {
    image: "img/Fitoplancton.png",
    name: "Fitoplancton",
    description: "El fitoplancton es un microorganismo que se encuentra en los océanos y es responsable de producir el 20% del oxígeno del planeta. Es una base importante de la cadena alimentaria marina y es esencial para el equilibrio ecológico de los océanos. Los cambios en su población pueden tener un impacto significativo en el ecosistema marino.",
    link: "./animales/Fitoplancton.html"
  }
];

const container = document.querySelector("#card-container");

animals.forEach((animal) => {
  const animalCard = new AnimalCard(
    animal.image,
    animal.name,
    animal.description,
    animal.link
  );
  container.appendChild(animalCard.createCard());
});

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const animalsContainer = document.querySelector(".animals-container");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  let filteredAnimals = animals.filter((animal) => {
    return animal.name.toLowerCase().includes(searchTerm);
  });
  animalsContainer.innerHTML = "";
  if (filteredAnimals.length > 0) {
    filteredAnimals.forEach((animal) => {
      const animalCard = new AnimalCard(
        animal.image,
        animal.name,
        animal.description,
        animal.link
      );
      animalsContainer.appendChild(animalCard.createCard());
    });
  } else {
    animalsContainer.innerHTML =
      '<p class="texto-no">No se encontraron resultados 😞<br> Pero puedes seguir explorando... :))</p> <p class="subtitulo-mini">Comunicate con <a href="https://www.instagram.com/ragosorio/" target="_blank">@Ragosorio</a> para agregar el animal que deseas agregar</p>';
  }
});
