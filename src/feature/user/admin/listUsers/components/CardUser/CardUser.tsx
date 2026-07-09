import { User } from "lucide-react";
import KebabMenu from "../../../../../../shared/components/KebabMenu/KebabMenu";
import styles from "./CardUser.module.css";

interface CardUser {
    name: string,
    email: string,
    role: string
}

export default function CardUser(props: CardUser) {
    return(
        <article className={styles.cardContainer}>
            <div className={styles.photoUser}>
                <User className={styles.iconUser}/>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.name}>{props.name}</h3>
                <p className={styles.email}>{props.email}</p>
                <span className={styles.role}>{props.role}</span>
            </div>

            <KebabMenu options={[
                {label: "Alterar"}
            ]}/>
        </article>
    );  
}