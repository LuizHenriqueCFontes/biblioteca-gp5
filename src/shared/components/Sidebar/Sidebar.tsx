import { AnimatePresence, motion } from "framer-motion";
import styles from "./Sidebar.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { Book, Home, X } from "lucide-react";
import { Link } from "react-router-dom";
import { authStorage } from "../../../feature/auth/services/authStorage";

interface Sidebar {
    open: boolean,
    onOpenChange: (open: boolean) => void
}

const role = authStorage.getRole();

export default function Sidebar(props: Sidebar){
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
                                
                                <button> <X /> </button>

                                <nav>
                                    <ul>
                                        <li>
                                            <Link to={role === "ADMIN" ? "/admin/home" : "/"}><Home /> {role === "ADMIN" ? "Dashboard" : "Tela de início"}</Link>
                                        </li>
                                        
                                        <li><Link to={role === "ADMIN" ? "/admin/imports" : "/search/books"}><Book /> {role === "ADMIN" ? "Importar livros" : "Pesquisar livros"}</Link></li>
                                    </ul>
                                </nav>

                            </motion.aside>

                        </Dialog.Content>

                    </Dialog.Portal>
                )}
            </AnimatePresence>

        </Dialog.Root>
    );
}