import { AnimatePresence, motion } from "framer-motion";
import { EllipsisVertical } from "lucide-react";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import styles from "./KebabMenu.module.css"

interface KebabItens {
    icon?: React.ReactNode
    label: string,
    onClick?: () => void,
    deleteOption?: boolean    
}

interface KebabProps {
    options: KebabItens[]
}

export default function KebabMenu(props: KebabProps) {

    const [open, setOpen] = useState(false);

    return(
        <DropDownMenu.Root open={open} onOpenChange={setOpen} >

            <DropDownMenu.Trigger asChild className={styles.kebabTrigger}> 
                <button className={styles.kebabButton}>
                    <EllipsisVertical className={styles.icon}/>
                </button>
            </DropDownMenu.Trigger>

            <DropDownMenu.Portal forceMount>

                <AnimatePresence>
                    {open && (
                        <DropDownMenu.Content asChild sideOffset={5} className={styles.kebabContent}>

                            <motion.div initial={{opacity: 0, scale: 0.95}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.95}}
                            transition={{duration: 0.2}}>

                                {props.options.map((option) => (
                                    <DropDownMenu.Item className={`${styles.kebabItem} ${option.deleteOption ? styles.kebabItemDel : ""}`} key={option.label} onSelect={option.onClick}>
                                        <span className={styles.itemIcon}>{option.icon}</span>

                                        <span className={option.deleteOption ? styles.deleteOption : ""}>{option.label}</span>
                                    </DropDownMenu.Item>
                                ))}
                            </motion.div>
                        </DropDownMenu.Content>
                    )}
                </AnimatePresence>

            </DropDownMenu.Portal>
        </DropDownMenu.Root>

    );
    
}