import logo from "../../../assets/logo/logo.png";
import styles from "./Logo.module.css";

export default function Logo(){
    return(
        <img src={logo} className={styles.logo} alt="Logo da empresa" />
    );
}