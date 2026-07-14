import type { LucideIcon } from "lucide-react";
import styles from "./Tabs.module.css";
import { motion } from "framer-motion";

interface TabsOption {
    icon?: LucideIcon
    value: string,
    label: string
}

interface TabsProps {
    option: TabsOption[],
    activeTab: string,
    onChange: (value: string) => void
}

export default function Tabs(props: TabsProps) {
    return(
        <div className={styles.buttonContainer}>
            {props.option.map((option) => {
                const isActive = props.activeTab === option.value;

                const Icon = option.icon;

               return(
                    <button className={`${styles.buttonFilter} ${isActive ? styles.active : ""}`} onClick={() => props.onChange(option.value)}>
                        {Icon && <Icon className={styles.icon}/>}

                        {option.label}
                    
                        {props.activeTab === option.value && <motion.div layoutId="underline" className={styles.indicator}/>}
                    </button>
               );
            })}     
        </div>
    );
}