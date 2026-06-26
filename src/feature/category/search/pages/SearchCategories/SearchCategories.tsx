import { Pencil, Plus, Search, Shapes, Trash2 } from "lucide-react";
import { Button } from "../../../../../shared/components/Button/Button";
import { Input } from "../../../../../shared/components/Input/Input";
import { useState } from "react";
import { useCategory } from "../../../hooks/useCategory";
import EmptyState from "../../../../../shared/components/EmptyState/EmptyState";
import CardCategory from "../../components/CardCategory";

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

                <div>
                    <label>Ordenar por</label>
                    <select name="order" id="order">
                        <option>Nome (A-Z)</option>
                    </select>
                </div>
            </div>

            <div>
                {loadingCategories && <p>Carregando</p>}

                {categories.length === 0
                    ? <EmptyState  icon={Shapes} title="Nenhuma categoria cadastrada" description="O sistema nao possui categorias cadastradas"/>

                    : categories.map((categorie) => (
                        <CardCategory key={categorie.idCategory}
                            title={categorie.name} action={
                                <>
                                    <Pencil />
                                    <Trash2 />
                                </>
                            }/>
                    ))}
            </div>
        </section>
    );
}