interface BookCardProps{
    id: string,
    coverUrl: string,
    fileUrl?: string,
    title: string,
    authors: string,
    action?: React.ReactNode
}

export default function BookCard(props: BookCardProps){
    return(
        <article>
            <img src={props.coverUrl} alt="Imagem do livro" />

            <div>
                {props.title}
                {props.authors}
            </div>

            {props.action && <div>{props.action}</div>}
        </article>
    );
}