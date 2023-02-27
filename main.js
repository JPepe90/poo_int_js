class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []
  }) {
    this._name = name;
    this._email = email;
    this._username = username;
    this._socialMedia = {
      twitter,
      instagram,
      facebook,
    },
    this._approvedCourses = [];
    this._learningPaths = [];
  }

  get name() { return this._name; }
  get email() { return this._email; }
  get username() { return this._username; }
  get socialMedia() { return this._socialMedia; }
  get approvedCourses() { return this._approvedCourses; }
  get learningPath() { return this._learningPath; }
}

class learningPath {
  constructor({
    pathName,
    courses = {},
  }) {
    this._pathName = pathName;
    this.courses = courses;
  }

  get pathName() { return this._pathName; }
  get courses() { return this.courses; }
}

class Course {
  constructor ({
    name,
    classes = [],
  }) {
    this._name = name; // con el guion bajo informamos que no se cambie el atributo name
    this.classes = classes;
  }

  // getter
  get name() { return this._name; }
  get classes() { return this.classes; }

  // setter
  set name(nuevoNombre) {
    // se pueden incluir validaciones
    if (nuevoNombre != 'Maldito') {
      this._name = nuevoNombre;
    } else {
      console.error("Nuevo nombre incluye palabras maliciosas");
    }

  }
}

// ----- Clases video
class Clases {
  constructor({
    name,
    videoURL,
    resources = [],
    comments = [],
  }) {
    this._name = name;
    this._videoURL = videoURL;
    this.resources = resources;
    this.comments = comments;
  }

  get name() { return this._name; }
  get videoURL() { return this._videoURL; }
  get resources() { return this.resources; }
  get comments() { return this.comments; }
}


// ----- Cursos 
const cursoProgBasica = new Course({
  name: "Curso gratis de Programacion Basica",
  classes: [],
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  classes: [],
});

const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  classes: [],
});

const cursoDataBusiness = new Course({
  name: "Curso de Data Business",
  classes: [],
});

const cursoDataviz = new Course({
  name: "Curso de Dataviz",
  classes: [],
});

const cursoUnity = new Course({
  name: "Curso de Unity",
  classes: [],
});

const cursoUnreal = new Course({
  name: "Curso de Unreal",
  classes: [],
});


// ----- Learning Paths
const escuelaWeb = new learningPath({
  name: "Escuela de desarrollo web",
  courses: [
    // "Curso gratis de Programacion Basica",
    // "Curso definitivo de HTML y CSS",
    // "Curso practico de HTML y CSS",
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ]
});

const escuelaData = new learningPath({
  name: "Escuela de Data Science",
  courses: [
    // "Curso gratis de Programacion Basica",
    // "Curso Data Business",
    // "Curso Dataviz",
    cursoProgBasica,
    cursoDataBusiness,
    cursoDataviz,
  ]
});

const escuelaVgs = new learningPath({
  name: "Escuela de Video ]Juegos",
  courses: [
    // "Curso gratis de Programacion Basica",
    // "Curso de Unity",
    // "Curso de Unreal",
    cursoProgBasica,
    cursoUnity,
    cursoUnreal,
  ]
});


// ----- Estudiantes
const Javier = new Student({
  name: 'Javier Pepe',
  email: 'javier@net.com',
  username: 'jpepe90',
  facebook: 'javier pepe'
});

const Pablo = new Student({
  name: 'Pablo Ruiz',
  email: 'pablo@lancer.com',
  username: 'pruiz22',
  twitter: 'prz_'
})