import { ScaleLoader } from "react-spinners";
import styles from "./Loading.module.css";

export default function Loading() {
    return(
        <div className={styles.container}>
            <ScaleLoader className={styles.loading}/>
        </div>
    );
}