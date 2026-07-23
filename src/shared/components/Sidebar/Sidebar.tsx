import { AnimatePresence, motion } from "framer-motion";
import styles from "./Sidebar.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Book, BookUp, Home, User, Users, X } from "lucide-react";
import { Link } from "react-router-dom";
import { authStorage } from "../../../feature/auth/services/authStorage";

interface Sidebar {
    open: boolean,
    onOpenChange: (open: boolean) => void
}

const role = authStorage.getRole();
const isAdmin = role === "ADMIN";

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
                                
                                <button onClick={() => props.onOpenChange(false)}> <X /> </button>

                                <nav>
                                    <ul>
                                        <li>
                                            <Link to={isAdmin ? "/admin/home" : "/"}><Home /> {isAdmin ? "Dashboard" : "Tela de início"}</Link>
                                        </li>
                                        
                                        <li>
                                            <Link to={isAdmin ? "/admin/imports" : "/search/books"}><Book /> {isAdmin ? "Importar livros" : "Pesquisar livros"}</Link>
                                        </li>

                                        <li>
                                            <Link to={isAdmin ? "/admin/list/users" : "/loan"}>{isAdmin ? 
                                            <>
                                                <Users /> 
                                                <span>Listar usuários</span>
                                            </> 
                                            :
                                            <>
                                                <BookUp /> 
                                                <span>Meus empréstimos</span>
                                            </>}</Link>
                                        </li>

                                        {
                                            isAdmin && 
                                            <li>
                                                <Link to={"/categories"}>Categorias</Link>
                                            </li>
                                        }

                                        <li>
                                            <Collapsible.Root>

                                                <Collapsible.Trigger>
                                                    <User /> Meu Perfil
                                                </Collapsible.Trigger>

                                                <Collapsible.Content asChild>
                                                    <ul>
                                                        <li>Minha conta</li>
                                                        <li>Editar dados</li>
                                                        <li>Sair</li>
                                                    </ul>

                                                </Collapsible.Content>

                                            </Collapsible.Root>
                                        </li>
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