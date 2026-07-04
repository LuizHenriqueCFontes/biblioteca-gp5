import { BookOpenText, Plus, Save, Trash2 } from "lucide-react";
import PageHeader from "../../../../../shared/components/PageHeader/PageHeader";
import { Input } from "../../../../../shared/components/Input/Input";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../../../user/bookDetails/hooks/useBookDetails";
import Breadcrumb from "../../../../../shared/components/Breadcrumb/Breadcrumb";
import { Button } from "../../../../../shared/components/Button/Button";
import { useEditBooks } from "../hooks/useEditBook";

export default function EditBookPage() {

    const { idBook } = useParams();

    const { book, loading } = useBookDetails(idBook);

    const { bookFormData, setBookFormData, handleArrayChange, handleStringChange } = useEditBooks(book ?? undefined);

    return(
        <section>
            <Breadcrumb breadcrumb={[
                {label: "Gerenciar livros", to: "/admin/search/books"},
                {label: "Editar livro"}
            ]}/>

            <PageHeader icon={BookOpenText} title="Editar livro" description="Atualize as informações do livro"/>

            <form>
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
                    onChange={(e) => handleArrayChange("description", e.target.value)}
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