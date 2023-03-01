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

  PublicarComentario(commentContent) {
    const comentario = new Comment({
      content: commentContent,
      studentName: this._name,
    });

    comentario.Publicar();
  }
}

class freeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(course) {
    if (course.isFree) {
      super.approvedCourses.push(course);
    } else {
      console.warn("No puedes cursar " + course._name + " porque no estas suscripto");
    }
  }
}

class basicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(course) {
    if (course.lang !== 'english') {
      super.approvedCourses.push(course);
    } else {
      console.warn("No puedes cursar " + course._name + " porque el lenguaje no está habilitado");
    }
  } 
}

class expertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(course) {
    super.approvedCourses.push(course);
  }
}

class teacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(course) {
    super.approvedCourses.push(course);
  }

  PublicarComentario(commentContent) {
    const comentario = new Comment({
      content: commentContent,
      studentName: this._name,
      studentRole: 'profesor'
    });

    comentario.Publicar();
  }
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
}

class Course {
  constructor ({
    name,
    clase = [],
    isFree = false,
    lang = 'spanish',
  }) {
    this._name = name; 
    this.clase = clase;
    this.isFree = isFree;
    this.lang = lang;
  }

  // getter
  get name() { return this._name; }

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
function playVideo(id) {
  const urlSecreta = "https://www.urlultrasecreta.com/" + id;
  console.log("Se está reproduciendo desde la URL" + urlSecreta);
}

function stopVideo(id) {
  const urlSecreta = "https://www.urlultrasecreta.com/" + id;
  console.log("Se está pausando desde la URL" + urlSecreta);
}

class Clases {
  constructor({
    name,
    videoID,
    resources = [],
    comments = [],
  }) {
    this._name = name;
    this._videoID = videoID;
    this.resources = resources;
    this.comments = comments;
  }

  get name() { return this._name; }
  get videoID() { return this._videoID; }

  reproducir() {
    playVideo(this.videoID);
  }

  pausar() {  
    stopVideo(this.videoID);
  }
}

class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole =studentRole;
    this.likes = 0;
  }

  Publicar() {
    console.log(this.studentName + " (" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log("mensaje: " + this.content);
  }
}


// ----- Cursos 
const cursoProgBasica = new Course({
  name: "Curso gratis de Programacion Basica",
  classes: [],
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  classes: [],
});

const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  classes: [],
  lang: 'english',
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
const Javier = new freeStudent({
  name: 'Javier Pepe',
  email: 'javier@net.com',
  username: 'jpepe90',
  facebook: 'javier pepe'
});

const Pablo = new basicStudent({
  name: 'Pablo Ruiz',
  email: 'pablo@lancer.com',
  username: 'pruiz22',
  twitter: 'prz_'
});

const Miguel = new expertStudent({
  name: 'Miguel Sanz',
  email: 'msanz@placer.com',
  username: 'msanzp',
  facebook: 'miguel sanz',
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

const Freddy = new teacherStudent({
  name: 'Freddy Vega',
  email: 'freddy@lancer.com',
  username: 'freddd',
  twitter: 'frdvg'
})