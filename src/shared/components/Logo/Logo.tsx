import logoBlue from "../../../assets/logo/logo-blue.png";
import logoWhite from "../../../assets/logo/logo-white.png";
import styles from "./Logo.module.css";

interface LogoProps{
    variant: "blue" | "white"
}

export default function Logo(props:LogoProps){
    const logo = props.variant === "blue" ? logoBlue : logoWhite;

    return(
        <img src={logo} className={styles.logo} alt="Logo da empresa" />
    );
}