// Creamos un PDF simple usando los components de la librería

import { Document, Page, StyleSheet } from '@react-pdf/renderer'
import InvoiceComponent from './Invoice/InvoiceComponent';
import InvoiceData from '../invoiceData/invoice-data';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        padding: 25,
    },
    section: {
        margin: 10,
        padding: 10,
    },
    // viewer: {
    //     // cambiar o reducir el espacio disponible del espectador
    //     width: window.innerWidth / 3,
    //     height: window.window.innerHeight / 2,
    // }
});

const MyPDF = () => {
    const greet = "Hello, World!";

    return (
        <Document title={`Factura No. ${InvoiceData.invoice_no}`} author='RGOV' subject='subject' keywords='keywords'>
            <Page size="A4" style={styles.page}>
                {/* <View style={styles.section}>
                    <Text>Hello, React-PDF!</Text>
                    <Text>{greet}</Text>
                </View> */}
                <InvoiceComponent invoice={InvoiceData} />
            </Page>
        </Document>
    )
}

export default MyPDF
