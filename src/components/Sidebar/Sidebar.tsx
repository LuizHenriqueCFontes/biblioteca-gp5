import { motion } from "framer-motion";
import Logo from "../Logo/Logo";


export default function Sidebar(){
    return(
        <motion.aside
        initial = {{x: "-100%"}}
        animate = {{x: 0}}
        exit={{x: "-100%"}}
        transition={{type: "spring", stiffness: 300, damping: 30}}
        >
            <Logo />
            <div>
                <h1>Biblioteca-GP5</h1>
                <p>Painel Administrativo</p>
            </div> 
             
            <nav>

            </nav>
        </motion.aside>
    );
}