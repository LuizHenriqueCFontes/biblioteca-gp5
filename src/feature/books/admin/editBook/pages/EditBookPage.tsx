import { BookOpenText, Plus, Save, Trash2 } from "lucide-react";
import PageHeader from "../../../../../shared/components/PageHeader/PageHeader";
import { Input } from "../../../../../shared/components/Input/Input";
import { useNavigate, useParams } from "react-router-dom";
import { useBookDetails } from "../../../user/bookDetails/hooks/useBookDetails";
import Breadcrumb from "../../../../../shared/components/Breadcrumb/Breadcrumb";
import { Button } from "../../../../../shared/components/Button/Button";
import { useEditBooks } from "../hooks/useEditBook";
import { handleEditBook } from "../action/handleEditBook";
import styles from "./EditBookPage.module.css";

export default function EditBookPage() {

    const { idBook } = useParams();

    const { book, loading } = useBookDetails(idBook);

    const { bookFormData, handleDescriptionChange, handleStringChange, handleAddAuthorEmpty, handleEditAuthors, handleDeleteAuthor, originalBookData, editBook } = useEditBooks(book ?? undefined);

    const navigate = useNavigate();

    async function handleEventSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const sucessEdit = await handleEditBook(idBook ?? "", originalBookData, bookFormData, editBook);

        if(!sucessEdit) {
            return;
        }

        navigate("/admin/search/books");
    }

    function handleCancel() {
        navigate("/admin/search/books");
    }

    return(
        <section className={styles.container}>
            <Breadcrumb breadcrumb={[
                {label: "Gerenciar livros", to: "/admin/search/books"},
                {label: "Editar livro"}
            ]}/>

            <PageHeader icon={BookOpenText} title="Editar livro" description="Atualize as informações do livro"/>

            <form onSubmit={(event) => handleEventSubmit(event)} className={styles.formContainer}>

                <div className={styles.dataContainer}>
                    {loading && <p>Carregando...</p>}

                    <Input className={styles.inputTitle} id="title" label="Título" value={bookFormData.title} onChange={(value) => handleStringChange("title", value)} placeholder="Adicione um novo título ao livro"/>
                    <div>
                        <label className={styles.label} htmlFor="authors">Autores</label>
                        {bookFormData.authors.map((author, index) => (
                            <div className={styles.authorsContainer} key={index}>
                                <Input className={styles.inputAuthors} id="authors"
                                value={author}
                                onChange={(value) => handleEditAuthors(index, value)}/>
                                <Button className={styles.btnDelete} variant="action" type="button" onClick={() => handleDeleteAuthor(index)}>
                                <Trash2 className={styles.deleteIcon}/> </Button>
                            </div>
                        ))}

                        <Button variant="dashed" icon={Plus} type="button" onClick={handleAddAuthorEmpty}>Adicionar autor</Button>
                    </div>
                    
                    <div className={styles.descriptionContainer}>
                        <label className={styles.label} htmlFor="description">Descrição</label>
                        <textarea
                        className={styles.description}
                        name="description"
                        id="description"
                        value={bookFormData.description}
                        onChange={(e) => handleDescriptionChange("description", e.target.value)}
                        rows={6}
                        maxLength={2000}
                        placeholder="Edite a categoria...">
                        </textarea>
                        <span className={styles.countDescription}>{bookFormData?.description[0]?.length} / 2000</span>
                    </div>
                </div>

                <div className={styles.btnContainer}>
                    <Button className={styles.btn} variant="primary" icon={Save}>Salvar alterações</Button>

                    <Button className={styles.btn} onClick={handleCancel} type="button" variant="secondary">Cancelar</Button>
                </div>
            </form>
        </section>
    );
}