import { useState } from "react";
import { useListUsers } from "../hooks/useListUsers";
import PageHeader from "../../../../../shared/components/PageHeader/PageHeader";
import { Search, UserRoundCog, UserX } from "lucide-react";
import { Input } from "../../../../../shared/components/Input/Input";
import CardUser from "../components/CardUser/CardUser";
import EmptyState from "../../../../../shared/components/EmptyState/EmptyState";
import styles from "./ListUsers.module.css";

export default function ListUsers() {

    const [name, setName] = useState("");

    const { users, loadingUsers } = useListUsers(name);

    return(
        <section className={styles.container}>
            <PageHeader icon={UserRoundCog} title="Usuários" description="Gerencie os usuários do sistema" className={styles.pageHeader}/>

            <Input id="search-users"
            className={styles.input} 
            ariaLabel="search-users" 
            icon={Search}
            value={name}
            onChange={setName}
            placeholder="Buscar usuário..."/>

            <div className={styles.userContainer}>
                {users.length === 0 ? <EmptyState icon={UserX} title="Usuário não encontrado" description="Nenhum usuário foi encontrado"/> : " "}

                {loadingUsers ?? <p>Carregando...</p>}

                {users.map((user) => (
                    <CardUser name={user.username}
                    email={user.email}
                    role={user.role}/>
                ))}
            </div>
        </section>
    );
}