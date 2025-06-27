import { PDFViewer, Page, Text, View, Document, PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import {styles} from "./style";
import { Table, TD, TH, TR } from '@ag-media/react-pdf-table';
import {tableData, totalData} from "./data";
function Invoice2() {
    // Create Document Component
const InvoicePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
        <View style={styles.header}>
            <View>
                <Text style={[styles.title, styles.textBold]}>INVOICE</Text>
                <Text>Invoice #INV-2025-001</Text>
            </View>
            <View style={styles.spaceY}>
                <Text style={styles.textBold}>ABC Textile Company</Text>
                <Text>123, Business Street</Text>
                <Text>Cross Z, Newzeland 1234</Text>
            </View>
        </View>
        <View style={styles.spaceY} >
            <Text style={[styles.billTo, styles.textBold]}>Bill To:</Text>
            <Text>Name: Arnold Trump</Text>
            <Text>Address: 28Y, Ship Cantt</Text>
            <Text>Sirus, Luxemburg 230542</Text>
        </View>
        {/* Render the Table */}
        <Table style={styles.table}>
            <TH style={[styles.tableHeader, styles.textBold]}>
                <TD style={styles.td}>Description</TD>
                <TD style={styles.td}>Quantity</TD>
                <TD style={styles.td}>Unit Price</TD>
                <TD style={styles.td}>Total</TD>   
            </TH>
            {tableData.map((item, index) => (
                <TR key={index}>
                    <TD style={styles.td}>{item.description}</TD>
                    <TD style={styles.td}>{item.quantity}</TD>
                    <TD style={styles.td}>{item.unitPrice.toFixed(2)}</TD>
                    <TD style={styles.td}>{item.total.toFixed(2)}</TD>
                    
                </TR>

            ))}
        </Table>
        <View style={styles.totals}>
            <View style={{ minWidth:"250px",}}>
                {totalData.map((item) => ( 
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                    }}>
                        <Text style={item.label === "Total" ? styles.textBold: {}}>
                            {item.label}
                        </Text>
                        <Text style={item.label === "Total" ? styles.textBold: {}}>
                            {item.value}
                        </Text>
                    </View>
                ))}
            </View>

        </View>


    </Page>
  </Document>
);
  return (
    <div>
      <div>
        <PDFViewer style={{ width: "100%", height: "800px" }}>
            <InvoicePDF/>
        </PDFViewer>
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <PDFDownloadLink document={<InvoicePDF />} fileName="Invoice.pdf">
            <button style={{ backgroundColor: 'green', color: 'white' }}>Download PDF</button>
        </PDFDownloadLink>
        
      </div>
    </div>
  )
}

export default Invoice2;
