import logo from "../../../assets/logo/logo.png";
import styles from "./Logo.module.css";

interface Logo {
    className?: string,
    onClick?: () => void
}

export default function Logo(props: Logo){
    return(
        <img src={logo} className={`${styles.logo} ${props.className ?? ""}`} alt="Logo da empresa" />
    );
}