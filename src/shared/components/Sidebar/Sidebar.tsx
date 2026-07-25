import { AnimatePresence, motion } from "framer-motion";
import styles from "./Sidebar.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Bolt, Book, BookLock, BookUp, ChevronDown, Home, LogIn, LogOut, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { authStorage } from "../../../feature/auth/services/authStorage";
import { useAuth } from "../../../feature/auth/hooks/useAuth";

interface Sidebar {
    open: boolean,
    onOpenChange: (open: boolean) => void
}

export default function Sidebar(props: Sidebar){

    const { isAuthenticated, logout } = useAuth();

    const role = authStorage.getRole();
    const isAdmin = role === "ADMIN";

    function handleExit() {
        authStorage.clear();
        logout();
    }   

    console.log(isAuthenticated);

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
                                
                

                                <nav className={styles.navContainer}>
                                    <ul className={styles.listContainer}>
                                        <li className={styles.linkContent}>
                                            <Link className={styles.link} to={isAdmin ? "/admin/home" : "/"}><Home className={styles.linkIcon}/> {isAdmin ? "Dashboard" : "Tela de início"}</Link>
                                        </li>
                                        
                                        <li className={styles.linkContent}>
                                            <Link className={styles.link} to={isAdmin ? "/admin/imports" : "/search/books"}><Book className={styles.linkIcon}/> {isAdmin ? "Importar livros" : "Pesquisar livros"}</Link>
                                        </li>

                                        <li className={styles.linkContent}>
                                            <Link className={styles.link} to={isAdmin ? "/admin/list/users" : isAuthenticated ? "/loan" : "/auth/login"}>{isAdmin ? 
                                            <>
                                                <Users className={styles.linkIcon}/> 
                                                <span>Listar usuários</span>
                                            </> 
                                            :
                                            <>
                                                <BookUp className={styles.linkIcon}/> 
                                                <span>Meus empréstimos</span>
                                            </>}</Link>
                                        </li>

                                        {
                                            isAdmin && 
                                            <>
                                                <li className={styles.linkContent}>
                                                    <Link className={styles.link} to={"/categories"}> <BookUp className={styles.linkIcon}/> Categorias</Link>
                                                </li>
                                            
                                                <li className={styles.linkContent}>
                                                    <Link className={styles.link} to={"/admin/search/books"}><BookLock className={styles.linkIcon}/> Gerenciar livros</Link>
                                                </li>
                                            </>
                                        }

                                        {isAuthenticated ? 
                                        <li className={styles.myProfile}>
                                            <Collapsible.Root className={styles.rootCollapsible}>

                                                <Collapsible.Trigger className={styles.trigger}>
                                                    <div className={styles.triggerContent}>
                                                        <User className={styles.profileIcon}/>
                                                        Meu Perfil
                                                    </div>
                                                    
                                                    <ChevronDown className={`${styles.arrow} ${styles.linkIcon}`}/>
                                                </Collapsible.Trigger>

                                                <Collapsible.Content className={styles.profileContent} asChild>
                                                    <ul className={styles.listProfileContainer}>
                                                        <li className={styles.profileContent}> <Link className={styles.link} to={"/user/edit/data"}> <Bolt className={styles.linkIcon}/> Editar dados</Link></li>

                                                        <li onClick={handleExit} className={styles.profileContent}> <Link className={styles.link} to={"/"}><LogOut className={styles.linkIcon}/>Sair</Link> </li>
                                                    </ul>
                                                </Collapsible.Content>

                                            </Collapsible.Root>
                                        </li>
                                        :
                                        <li className={`${styles.linkContent} ${styles.linkLogin}`}><Link className={styles.link} to={"/auth/login"}> <LogIn className={styles.linkIcon}/> Fazer login</Link></li>
                                        }
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