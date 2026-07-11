import type { LucideIcon } from "lucide-react"
import styles from "./PageHeader.module.css"

interface PageHeader {
    icon: LucideIcon,
    title: string,
    description: string,
    className?: string
}

export default function PageHeader(props: PageHeader) {

    const Icon = props.icon;

    return(
    <div className={`${styles.titleContainer} ${props.className ?? ""}`}>
        <div className={styles.iconContainer}>
            <Icon className={styles.icon}/>
        </div>

        <div className={styles.infoContainer}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.description}>{props.description}</p>
        </div>
    </div>
    );
}