//css
import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mirror <span>Mine</span>
      </h2>
      <p>
        esse projeo consiste em um blog feito com react no front-end e firebase
        no backend
      </p>
      <Link to="/posts/create" className="btn">
        Criar Mirror
      </Link>
    </div>
  );
};

export default About;
