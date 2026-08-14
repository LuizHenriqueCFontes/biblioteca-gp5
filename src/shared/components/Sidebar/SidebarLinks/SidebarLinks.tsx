interface SidebarLinks {
    onClick: () => void
}

export default function SidebarLinks(props: SidebarLinks) {
    return(
        <nav className={styles.navContainer}>
            <ul className={styles.listContainer}>
                <li onClick={onClickChange} className={styles.linkContent}>
                    <Link className={styles.link} to={isAdmin ? "/admin/home" : "/"}><Home className={styles.linkIcon}/> {isAdmin ? "Dashboard" : "Tela de início"}</Link>
                </li>
                
                <li onClick={onClickChange} className={styles.linkContent}>
                    <Link className={styles.link} to={isAdmin ? "/admin/imports" : "/search/books"}><Book className={styles.linkIcon}/> {isAdmin ? "Importar livros" : "Pesquisar livros"}</Link>
                </li>

                <li onClick={onClickChange} className={styles.linkContent}>
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
                        <li onClick={onClickChange} className={styles.linkContent}>
                            <Link className={styles.link} to={"/categories"}> <BookUp className={styles.linkIcon}/> Categorias</Link>
                        </li>
                    
                        <li onClick={onClickChange} className={styles.linkContent}>
                            <Link className={styles.link} to={"/admin/search/books"}><BookLock className={styles.linkIcon}/> Gerenciar livros</Link>
                        </li>
                    </>
                }

                
            </ul>

            <div className={styles.profileContainer}>
                {isAuthenticated ?
                <div className={styles.myProfile}>
                    <Collapsible.Root className={`${styles.rootCollapsible}`}>
                        <Collapsible.Trigger className={styles.trigger}>
                            <div className={styles.triggerContent}>
                                <User className={styles.profileIcon}/>
                                Meu Perfil
                            </div>
                
                            <ChevronDown className={`${styles.arrow} ${styles.linkIcon}`}/>
                        </Collapsible.Trigger>
                        <Collapsible.Content className={styles.profileContent} asChild>
                            <ul className={styles.listProfileContainer}>
                                <li onClick={onClickChange} className={`${styles.profileContent} ${styles.profileItem}`}> <Link className={styles.link} to={"/user/edit/data"}> <Bolt className={styles.linkIcon}/> Editar dados</Link>
                                </li>
                                <li onClick={handleExit} className={`${styles.profileContent} ${styles.profileItem}`}> <Link className={styles.link} to={"/"}><LogOut className={styles.linkIcon}/>Sair</Link>
                                </li>
                            </ul>
                        </Collapsible.Content>
                    </Collapsible.Root>
                </div>
                :
                <div className={`${styles.linkContent} ${styles.linkLogin}`}><Link className={styles.link} to={"/auth/login"}> <LogIn className={styles.linkIcon}/> Fazer login</Link></div>
                }
            </div>
        </nav>
    );
}