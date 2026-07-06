import { BookOpenText, Plus, Save, Trash2 } from "lucide-react";
import PageHeader from "../../../../../shared/components/PageHeader/PageHeader";
import { Input } from "../../../../../shared/components/Input/Input";
import { useNavigate, useParams } from "react-router-dom";
import { useBookDetails } from "../../../user/bookDetails/hooks/useBookDetails";
import Breadcrumb from "../../../../../shared/components/Breadcrumb/Breadcrumb";
import { Button } from "../../../../../shared/components/Button/Button";
import { useEditBooks } from "../hooks/useEditBook";
import { handleEditBook } from "../action/handleEditBook";

export default function EditBookPage() {

    const { idBook } = useParams();

    const { book, loading } = useBookDetails(idBook);

    const { bookFormData, handleDescriptionChange, handleStringChange, originalBookData, editBook } = useEditBooks(book ?? undefined);

    const navigate = useNavigate();

    async function handleEventSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        await handleEditBook(idBook ?? "", originalBookData, bookFormData, editBook);

        navigate("/admin/search/books");
    }

    return(
        <section>
            <Breadcrumb breadcrumb={[
                {label: "Gerenciar livros", to: "/admin/search/books"},
                {label: "Editar livro"}
            ]}/>

            <PageHeader icon={BookOpenText} title="Editar livro" description="Atualize as informações do livro"/>

            <form onSubmit={(event) => handleEventSubmit(event)}>
                {loading && <p>Carregando...</p>}

                <Input id="" label="Título" value={bookFormData.title} onChange={(value) => handleStringChange("title", value)} placeholder="Adicione um novo título ao livro"/>

                <div>
                    {bookFormData.authors.map((author, index) => (
                        <div key={index}>
                            <Input id="index"
                            label="Autores"
                            value={author}
                            onChange={(value) => handleArrayChange("authors", value)}/>

                            <Button variant="action" type="button"> <Trash2/> </Button>
                        </div>
                    ))}

                    <Button variant="secondary" icon={Plus} type="button">Adicionar autor</Button>
                </div>

                <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea 
                    name="description" 
                    id="description" 
                    value={bookFormData.description} 
                    onChange={(e) => handleDescriptionChange("description", e.target.value)}
                    rows={20}
                    maxLength={2000}></textarea>
                </div>

                <div>
                    <Button variant="primary" icon={Save}>Salvar alterações</Button>

                    <Button type="button" variant="secondary">Cancelar  </Button>
                </div>
            </form>
        </section>
    );
}