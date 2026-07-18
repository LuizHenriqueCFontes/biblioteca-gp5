import type { LucideIcon } from "lucide-react";
import styles from "./CardStatus.module.css";

interface CardStatusLoan {
    icon: LucideIcon,
    number?: number,
    caption: string,
    information?: string,
    className?: string
    variant: "purple" | "orange" | "green" | "blue"
}

export default function CardStatus(props: CardStatusLoan) {
    
    const Icon = props.icon;

    return(
        <article className={`${styles.container} ${styles[props.variant]}`}>
            <div className={styles.iconContainer}>
                <Icon className={styles.icon}/>
            </div>
            <h3 className={styles.number}>{props.number ?? 0}</h3>
            <p className={styles.caption}>{props.caption}</p>
            <p className={styles.information}>{props.information}</p>
        </article>
    );
}