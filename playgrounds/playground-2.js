class Course {
  constructor({
    name,
    classes = [],
  }) {
    this._name = name;
    this.classes = classes;
  }

  get name() {
    // Tu código aquí 👈
    return this._name;
  }

  set name(nuevoNombrecito) {
    // Tu código aquí 👈
    let nuevoName;
    if (!nuevoNombrecito) {
      nuevoName = this._name;
    } else {
      nuevoName = nuevoNombrecito;
    }
    
    if (typeof(nuevoName) === 'string') {
      let nombresLista = nuevoNombrecito.split(" ");
      let nombresCap = "";

      nombresLista.forEach(elemento => {
        nombresCap += " " + elemento[0].toUpperCase() + elemento.substring(1);
      })
      
      this._name = nombresCap.substring(1);
    }
  }
}

const courseName = "curso de programación básica";
const nombreMayusculas = new Course({
  name: courseName,
});
nombreMayusculas.name = courseName;

