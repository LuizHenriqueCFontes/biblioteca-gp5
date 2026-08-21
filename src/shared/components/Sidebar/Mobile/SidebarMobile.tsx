import { AnimatePresence, motion } from "framer-motion";
import styles from "./SidebarMobile.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import SidebarLinks from "../SidebarLinks/SidebarLinks";

interface Sidebar {
    open: boolean,
    onOpenChange: (open: boolean) => void
}

export default function SidebarMobile(props: Sidebar){

    function onClickChange() {
        props.onOpenChange(false);
    }

    return(
        <Dialog.Root open={props.open}
        onOpenChange={props.onOpenChange}>

            <AnimatePresence>
                {props.open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}/>
                        </Dialog.Overlay>

                        <Dialog.Content asChild>
                            <motion.aside className={styles.sidebar} initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{duration: 0.25}}>

                                <SidebarLinks onClick={onClickChange}/>

                            </motion.aside>

                        </Dialog.Content>

                    </Dialog.Portal>
                )}
            </AnimatePresence>

        </Dialog.Root>
    );
}