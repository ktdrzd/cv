import css from "./Contact.module.css";
import { BsTelephone } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className={css.miniCont}>
        <BsTelephone />
        <p>+380-666-83-50-09</p>
      </div>
      <div className={css.miniCont}>
        <FaTelegram />
        <p>@jooonson</p>
      </div>
      <div className={css.miniCont}>
        <FaGithub />
        <p>ktdrzd</p>
      </div>
    </div>
  );
};

export default Contact;
