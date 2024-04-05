import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        justifyContent: 'flex-start',
        width: '50%'
    },
    billTo: {
        fontFamily: "Poppins-Bold",
        marginRight: 10,
    },
    MainbillTo: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 3,
        flexGrow: 1,
    }
});

const InvoiceBillTo = ({ invoice }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.MainbillTo}>
                <Text style={styles.billTo}>Bill To:</Text>
                <Text>{invoice.fullname}</Text>
            </View>
            <View style={styles.MainbillTo}>
                <Text style={styles.billTo}>Address:</Text>
                <Text>{invoice.address}</Text>
            </View>
            <View style={styles.MainbillTo}>
                <Text style={styles.billTo}>Phone no:</Text>
                <Text>{invoice.phone}</Text>
            </View>
            <View style={styles.MainbillTo}>
                <Text style={styles.billTo}>Email:</Text>
                <Text>{invoice.email}</Text>
            </View>
        </View>
    )
}

export default InvoiceBillTo;
