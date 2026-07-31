import { useParams } from "react-router-dom";
import { ReactReader } from "react-reader"
import styles from "./ReaderPage.module.css";
import EmptyState from "../../../../shared/components/EmptyState/EmptyState";
import { useReaderProgress } from "../hooks/useReaderProgress";
import { Rendition } from "epubjs"
import { readerTheme } from "../../themes/readerTheme";
import { BookX } from "lucide-react";
import Loading from "../../../../shared/components/Loading/Loading";

export default function ReaderPage() {

    const { idBook } = useParams();

    const { reading, loadingReading, handleLocationChange, renditionRef} = useReaderProgress(`${idBook}`);

    const handleSetRendition = (rendition: Rendition) => {
        renditionRef.current = rendition;

        rendition.book.ready.then(() => {
            rendition.book.locations.generate(1024);
        });

        rendition.themes.register("modern", readerTheme)

        rendition.themes.select("modern");
    }

    if(loadingReading) {
        return(<Loading />);
    }

    if(!reading) {
        return <EmptyState  icon={BookX} title="Livro não encontrado" description="nenhum livro foi encontrado"/>
    }

    return(
        <div className={styles.readerContainer}>
            <ReactReader url={reading.fileUrl} 
            location={reading.epubCfi  || null} 
            locationChanged={handleLocationChange}
            getRendition={handleSetRendition}
            epubOptions={{
                allowPopups: true,
                allowScriptedContent: true
            }}
            />
        </div>
    );
}