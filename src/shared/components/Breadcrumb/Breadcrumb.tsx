import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbItem {
    label: string,
    to?: string
}

interface BreadcrumbProps {
    breadcrumb: BreadcrumbItem[]
}

export default function Breadcrumb(props: BreadcrumbProps) {
    return(
        <nav>
            <ul className={styles.breadcrumbContainer}>   

                {props.breadcrumb.map((breadcrumb, index) => {
                    const isLast = index === props.breadcrumb.length -1;
                    
                    return(
                        isLast
                        ? <li key={breadcrumb.label}><span className={styles.breadcrumbValue}>{breadcrumb.label}</span></li>
                        
                        :   <>
                                <li key={breadcrumb.label}><Link className={styles.breadcrumbValue} to={`${breadcrumb.to}`}>{breadcrumb.label}</Link></li>

                                <li><ChevronRight className={styles.breadcrumbIcon}/></li>
                            </>
                    );
                })}
            </ul>
        </nav>   
    );
}