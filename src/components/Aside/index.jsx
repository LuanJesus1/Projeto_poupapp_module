import style from './aside.module.css'
import logo from "../../assents/logo.svg";

export function Aside() {
  return (
    <aside className={style.aside}>
      <img src={logo} alt="Logo" className="Logo" />
      <footer>
        Desenvolvido pelo aluno Luan de Jesus junto da Alura em processo de formação de curso.
      </footer>
    </aside>
  );
}
