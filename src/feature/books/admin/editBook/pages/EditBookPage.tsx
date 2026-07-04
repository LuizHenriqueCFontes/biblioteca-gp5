import { BookOpenText } from "lucide-react";
import PageHeader from "../../../../../shared/components/PageHeader/PageHeader";
import { Input } from "../../../../../shared/components/Input/Input";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../../../user/bookDetails/hooks/useBookDetails";
import type { EditBookRequestDTO } from "../types/editBookRequestDTO";
import Breadcrumb from "../../../../../shared/components/Breadcrumb/Breadcrumb";

export default function EditBookPage() {

    const { idBook } = useParams();

    const { book, loading } = useBookDetails(idBook);

    const [bookFormData, setBookFormData] = useState<EditBookRequestDTO>({title: "", authors: [], description: [], source: ""});

    useEffect(() => {
        if(!book) {
            return;
        }

        setBookFormData({
            title: book?.title ?? "",
            authors: book.authors ?? [],
            description: book.description ??[],
            source: ""
        });
    }, [book]);

    function handleStringChange(field: keyof EditBookRequestDTO, value: string) {
        setBookFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    }
    
    function handleArrayChange(field: keyof EditBookRequestDTO, value: string) {
        setBookFormData((prev) => ({
            ...prev,
            [field]: [
                        ...(prev[field] as string []), 
                        value
                    ]
        }))
    }

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

                {bookFormData.authors.map((author, index) => (
                    <div key={index}>
                        <Input id="index" 
                        value={author}
                        onChange={(value) => handleArrayChange("authors", value)}/>
                    </div>
                ))}


            </form>
        </section>
    );
}