class Banda {
  constructor({
    nombre,
    generos = [],
  }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }

  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    if (integranteNuevo.instrumento !== 'Bateria') {
      this.integrantes.push(integranteNuevo);
    } else {
      let baterista = false;
      this.integrantes.forEach(artista => {
        if (artista.instrumento === 'Bateria') {
          baterista = true;
        }
      });

      if (!baterista) {
        this.integrantes.push(integranteNuevo);
      }
    }
  }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({
    nombre,
    instrumento,
  }) {
    this.nombre = nombre;
    this.instrumento = instrumento;
  }
}

const data = {
  nombre: "Los Jacks",
  generos: ["rock", "pop", "post-punk"],
  integrantes: [],
}
const banda = new Banda(data);
banda.agregarIntegrante(new Integrante({ nombre: "Erik", instrumento: "Guitarra" }));
banda.agregarIntegrante(new Integrante({ nombre: "Paul", instrumento: "Bateria" }));
banda.agregarIntegrante(new Integrante({ nombre: "John", instrumento: "Guitarra" }));
banda.agregarIntegrante(new Integrante({ nombre: "Ron", instrumento: "Bateria" }));

console.log(banda);