    class AnimalCard {
        constructor(image, title, text, link) {
          this.image = image;
          this.title = title;
          this.text = text;
          this.link = link;
        }
      
        createCard() {
           const adminCard = document.createElement("div")
            adminCard.classList.add('col-12', 'col-md-4', 'my-5')

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
            description: "Las nutrias son animales semiacuáticos, solitarios y nocturnos, se alimentan principalmente de peces, crustáceos y moluscos. Son importantes para el ecosistema acuático, pero algunas especies están en peligro debido a la pérdida de hábitat y caza.",
            link: "./animales/nutrias.html"
        },
        {
            image: "img/tortuga.png",
            name: "Tortuga",
            description: "Las tortugas son reptiles con cáscara protectora que viven en ambientes acuáticos y terrestres, algunas especies son endémicas y suelen tener una longevidad de más de 30 años, desafortunadamente, muchas especies están en peligro de extinción debido a la actividad humana.",
            link: "./animales/tortugas.html"
        },
        {
            image: "img/medusa.png",
            name: "Medusa",
            description: "Las medusas son animales acuáticos invertebrados con tentáculos venenosos, viven principalmente en agua salada, son importantes en el ecosistema marino pero algunas especies están en peligro debido a la actividad humana, como la contaminación y la sobrepesca.",
            link: "./animales/medusa.html"
        },
        {
            image: "img/Tiburon-martillo.png",
            name: "Tiburon Martillo",
            description: "Los tiburones martillo tienen una cabeza en forma de martillo y una aleta dorsal plana en forma de T, se alimentan de peces y crustáceos, son comunes en aguas cálidas y templadas del mundo, y a menudo se pueden ver cerca de la superficie, atrayendo a buceadores.",
            link: "./animales/tiburon-martillo.html"
        },
        {
            image: "img/Dragon-mar.png",
            name: "Dragones de Mar",
            description: "Los dragones del mar son peces voladores conocidos por saltar fuera del agua y volar con alas alargadas y cola en forma de lemmon, encontrados en aguas cálidas y templadas del mundo, se alimentan de peces y cefalópodos, solitarios y tienen una apariencia impresionante.",
            link: "./animales/dragon-de-mar.html"
        },
        {
            image: "img/Manta-gigante.png",
            name: "Mantas Gigantes",
            description: "Las mantas gigantes son animales marinos filtradores de gran tamaño, con alas de hasta 7 metros de envergadura, se encuentran en aguas cálidas y templadas, son solitarias y se alimentan principalmente de plancton. Son una especie en peligro de extinción debido a la contaminación.",
            link: "./animales/manta-gigante.html"
        },
        {
            image: "img/Estrella-de-mar.png",
            name: "Estrella de Mar",
            description: "Las estrellas de mar son animales marinos invertebrados con forma de estrella, tienen cinco o más brazos y se encuentran en todos los océanos del mundo, son importantes para el ecosistema marino y se alimentan principalmente de algas y detritos. Sin embargo, están en peligro debido a la sobrepesca y la contaminación.",
            link: "./animales/estrellas.html"
        },
        {
            image: "img/Ballena.png",
            name: "Ballenas",
            description: "Las ballenas son mamíferos acuáticos de gran tamaño, con variedad de especies como ballena azul, ballena jorobada, ballena franca austral y ballena gris. Se alimentan principalmente de plancton, krill y peces pequeños. Son animales sociales y comunicativos, y están en peligro de extinción debido a la pesca.",
            link: "animales/ballenas.html"
        },
        {
            image: "img/Coral.png",
            name: "Coral",
            description: "Los corales son organismos marinos que forman colonias y crean arrecifes de coral. Son importantes para el ecosistema marino y sirven como hogar para una gran variedad de vida marina. Son sensibles a las variaciones de temperatura y pH del agua. Sin embargo, están en peligro debido al calentamiento global y la contaminación.",
            link: "./animales/coral.html"
        },
        {
            image: "img/Delfin.png",
            name: "Delfin",
            description: "Los delfines son mamíferos acuáticos inteligentes y sociales, se encuentran en todos los océanos del mundo y se caracterizan por su gran capacidad de comunicación y nadar a gran velocidad. A menudo son considerados animales sagrados en algunas culturas y son objeto de estudio en investigaciones científicas.",
            link: "./animales/delfin.html"
        },
        {
            image: "img/Tiburon-toro.png",
            name: "Tiburon Toro",
            description: "Los tiburones toro son una especie de tiburón de tamaño mediano, con un cuerpo fuerte y musculoso y una cabeza ancha y aplanada. Se encuentran en aguas cálidas y templadas de todo el mundo y son conocidos por su agresividad y capacidad para nadar en aguas poco profundas. Ellos no atacan con frecuencia a los humanos.",
            link: "./animales/tiburon-toro.html"
        },
        {
            image: "img/pinguino.png",
            name: "Pingüinos",
            description: "Los pingüinos son aves acuáticas que viven principalmente en el hemisferio sur. Tienen un cuerpo adaptado para nadar y caminar sobre hielo y nieve. Existen 18 especies de pingüinos, cada una con características únicas, como el tamaño, el color y el hábitat. Están en peligro debido a la pesca indiscriminada y la contaminación.",
            link: "./animales/pinguinos.html"
        }
    ];
    
    const container = document.querySelector("#card-container");
    
    animals.forEach(animal => {
        const animalCard = new AnimalCard(animal.image, animal.name, animal.description, animal.link);
        container.appendChild(animalCard.createCard());
    });
    
