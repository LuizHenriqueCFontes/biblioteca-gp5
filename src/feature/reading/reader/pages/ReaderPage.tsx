import { useParams } from "react-router-dom";
import { ReactReader } from "react-reader"
import styles from "./ReaderPage.module.css";
import EmptyState from "../../../../shared/components/EmptyState/EmptyState";
import { useReaderProgress } from "../hooks/useReaderProgress";

export default function ReaderPage() {

    const handleLocationChanged = (epubCfi: string) => {
        console.log(epubCfi);
    }

    const { idBook } = useParams();

    const { reading, loadingReading, updateReading} = useReaderProgress(`${idBook}`);

    if(loadingReading) {
        return(<p>Carregando...</p>);
    }

    if(!reading) {
        return <EmptyState title="Livro não encontrado" description="nenhum livro foi encontrado"/>
    }

    return(
        <div className={styles.readerContainer}>
            <ReactReader url={reading.fileUrl} location={reading.epubCfi} locationChanged={handleLocationChanged}/>
        </div>
    );
}