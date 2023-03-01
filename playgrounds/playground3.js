import { Comment } from "./Comment";
import { Student } from "./Student";

export class TeacherStudent extends Student {
  // Tu código aquí 👈
  constructor({
    props,
    skills = [],
  }) {
    super(props);
    this.skills = skills;
  }

  publicarComentario(comment) {
    let habilidades = "";
    this.skills.forEach(element => {
      habilidades += ',' + element;
    });
    const skillStr = habilidades.substring(1);

    const newComment = new Comentario({
      content: comment,
      studentName: this.studentName,
      studentRole: 'profesor de ' + skillStr,
    });

    newComment.publicarComentario();
  }
}

class Comentario extends Comment {
  constructor(props) {
    super(props);
  }
}

const skills = ["js", "python", "mongodb"];
const props = {
  name: "Erik Ochoa",
  username: "elyager",
}

const profesor = new TeacherStudent(props, skills);
profesor.publicarComentario('Mi primer comentario');