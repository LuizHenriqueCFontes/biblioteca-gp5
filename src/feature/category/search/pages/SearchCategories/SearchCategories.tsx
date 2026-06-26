import { Plus, Search, Shapes } from "lucide-react";
import { Button } from "../../../../../shared/components/Button/Button";
import { Input } from "../../../../../shared/components/Input/Input";
import { useState } from "react";
import type { useCategory } from "../../../hooks/useCategory";
import EmptyState from "../../../../../shared/components/EmptyState/EmptyState";

export default function SearchCategories() {

    const [findCategory, setFindCategory] = useState("");

    const { categories, loadingCategories } = useCategory(findCategory);

    return(
        <section>
            <div>
                <h1>Categorias</h1>
                <p>Gerencie as categorias de livros da biblioteca.</p>
            </div>

            <Button variant="primary" icon={Plus}>Nova categoria</Button>

            <div>
                <Input id="categorias" icon={Search} ariaLabel="Buscar Categorias" placeholder="Buscar categorias..." value={findCategory} onChange={setFindCategory}/>

                <select name="order" id="order"></select>
            </div>

            <div>
                {loadingCategories && <p>Carregando</p>}

                {categories.length === 0
                    ? <EmptyState  icon={Shapes} title="Nenhuma categoria cadastrada" description="O sistema nao possui categorias cadastradas"/>
                    : 
                }

            </div>
        </section>
    );
}