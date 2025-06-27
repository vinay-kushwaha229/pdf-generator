import { StyleSheet } from '@react-pdf/renderer';



// Create styles
export const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFF',
    color: '#262626',
    fontFamily:'Helvetica',
    fontSize:12,
    padding: "30px 50px"

  },
  header: {
    flexDirection:"row",
    justifyContent: "space-between",
    marginBottom:20,
  },
  title:{
    fontSize:25,
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
  },
  spaceY: {
    display: 'flex',
    flexDirection: "column",
    gap: '5px',
  },
  billTo: {
    marginBottom: '10px',
  },
  table:{
    width: "100%",
    borderColor: "1px solid #3f4f46",
    margin: "20px 0",
  },
  tableHeader:{
    backgroundColor: "#e5e5e5",
  },
  td: {
    padding:6,
  },
  totals: {
    display: "flex",
    alignItems: "flex-end",
  }
});