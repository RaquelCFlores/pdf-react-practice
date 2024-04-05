import { View, Text, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableRow from "./InvoiceTableRow";

const borderColor = '#00519C';

const styles = StyleSheet.create({
    tableContainer: {
        fontFamily: 'Poppins-Regular',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#3778C2',
        width: '100%'
    },
    container: {
        fontFamily: 'Poppins-Bold',
        flexDirection: 'row',
        borderBottomColor: '#00519C',
        backgroundColor: '#00519C',
        color: '#fff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontSize: 14,
    },
    description: {
        width: '60%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '15%',
    }

});

const InvoiceItemsTable = ({ invoice }) => {
    return (
        <View style={styles.tableContainer}>
            {/* Invoice table header */}
            <View style={styles.container}>
                <Text style={styles.description}>Item Descripton</Text>
                <Text style={styles.qty}>Qty</Text>
                <Text style={styles.rate}>Price</Text>
                <Text style={styles.amount}>Amount</Text>
            </View>
            {/* Invoice table rows */}
            <InvoiceTableRow items={invoice.items}/>
        </View>
    )
}

export default InvoiceItemsTable;
