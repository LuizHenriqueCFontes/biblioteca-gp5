import { BookmarkPlus } from "lucide-react";
import Breadcrumb from "../../../shared/components/Breadcrumb/Breadcrumb";
import PageHeader from "../../../shared/components/PageHeader/PageHeader";

export default function ManageCategories() {
    return(
        <section>
            <Breadcrumb breadcrumb={[
                {label: "Gerenciar livros", to: "/admin/search/books"},

                {label: "Gerenciar Categorias"}
            ]}/>

            <PageHeader icon={BookmarkPlus} title="Vincular categorias ao livro" description="Selecione as categorias que se aplicam a este livro"/>
        </section>
    );
}