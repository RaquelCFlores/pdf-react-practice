import { Font, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import MyPDF from './components/MyPDF';

import Poppins from "./fonts/Poppins-Regular.ttf";
import PoppinsMedium from "./fonts/Poppins-Medium.ttf";
import PoppinsBold from "./fonts/Poppins-SemiBold.ttf"

import './App.css'

Font.register({ family: 'Poppins-Bold', src: PoppinsBold });
Font.register({ family: 'Poppins-Regular', src: Poppins });
Font.register({ family: 'Poppins-Medium', src: PoppinsMedium });

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Generating Dynamic PDFs with React.</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            {/* Renderizados el PDF o mostrarlo, para ello ocupamos el componente PDFViewer */}
            {/* showToolbar={false} eliminar la barra de herramientas */}

            <PDFViewer style={{ width: '100%', height: '500px' }}>
                <MyPDF />
            </PDFViewer>
            <PDFViewer style={{ width: '100%', height: '500px' }}>
                <MyPDF />
            </PDFViewer>
            <PDFDownloadLink document={<MyPDF />} fileName="somename.pdf" style={{fontSize: 25}}>
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink>
        </>
    )
}

export default App
