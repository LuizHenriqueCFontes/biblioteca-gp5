import { AnimatePresence, motion } from "framer-motion";
import styles from "./SidebarMobile.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Bolt, Book, BookLock, BookUp, ChevronDown, Home, LogIn, LogOut, User, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { authStorage } from "../../../../feature/auth/services/authStorage";
import { useAuth } from "../../../../feature/auth/hooks/useAuth";
import SidebarLinks from "../SidebarLinks/SidebarLinks";

interface Sidebar {
    open: boolean,
    onOpenChange: (open: boolean) => void
}

export default function SidebarMobile(props: Sidebar){

    const { isAuthenticated, logout } = useAuth();

    const navigate = useNavigate();

    const role = authStorage.getRole();
    const isAdmin = role === "ADMIN";

    function handleExit() {
        authStorage.clear();
        logout();
        props.onOpenChange(false);
        navigate("/");
    }   

    function onClickChange() {
        props.onOpenChange(false);
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
                                
                

                                <SidebarLinks onClick={onClickChange}/>

                            </motion.aside>

                        </Dialog.Content>

                    </Dialog.Portal>
                )}
            </AnimatePresence>

        </Dialog.Root>
    );
}