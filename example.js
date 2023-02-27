// Objetos Literales
const natalia = {
  // Atributos
  name: "Natalia",
  surname: "Lola",
  age: 26,
  cursosAprobados: [
    "Curso Definitivo HTML y CSS",
    "Curso Práctico HTML y CSS"
  ],

  // Metodos
  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
  }
};

// natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.aprobarCurso("Curso de Responsive Design");

////////////
// Prototipos
function Student(name, surname, age, cursos) {
  // Atributos
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.cursosAprobados = cursos;

  // Metodos
  this.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

// Crear metodo por fuera
Student.prototype.aprobarCursoNuevo = function(nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso)
}

// Objeto Instanciado
const juanita = new Student(
  'Juanita',
  'Salazar',
  19,
  ["Curso de Introduccion a los video juegos", "Curso de Grids"]
);
