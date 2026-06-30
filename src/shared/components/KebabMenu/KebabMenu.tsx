import { AnimatePresence, motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { EllipsisVertical } from "lucide-react";


interface KebabItens {
    label: string,
    onClick?: () => void
}

interface KebabProps {
    options: KebabItens[]
}

export default function KebabMenu(props: KebabProps) {
    
}