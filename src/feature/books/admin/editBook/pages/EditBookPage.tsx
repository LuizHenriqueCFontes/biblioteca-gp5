import { BookOpenText } from "lucide-react";
import PageHeader from "../../../../../shared/components/PageHeader/PageHeader";
import { Input } from "../../../../../shared/components/Input/Input";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../../../user/bookDetails/hooks/useBookDetails";
import type { EdiitBookRequestDTO } from "../types/editBookRequestDTO";

export default function EditBookPage() {

    const { idBook } = useParams();

    const { book, loading } = useBookDetails(idBook);

    const [bookFormData, setBookFormData] = useState<EdiitBookRequestDTO>({title: "", authors: [], description: [], source: ""});

    return(
        <section>
            <PageHeader icon={BookOpenText} title="Editar livro" description="Atualize as informações do livro"/>

            <form>
                {loading && <p>Carregando...</p>}

                <div>
                    <Input id="" label="Título" value={bookFormData.title} onChange={setBookFormData.} placeholder="Adicione um novo título ao livro"/>
                </div>

            </form>
        </section>
    );
}