// import css from "./Header.module";
import css from "./Header.module.css";
import { BsMenuButtonWideFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className={css.cont}>
      <h2>
        Drozd Kateryna <br />
        Fullstack Developer
      </h2>
      <button className={css.button}>
      <BsMenuButtonWideFill className={css.burger}/>
      </button>
    </div>
  );
};

export default Header;
