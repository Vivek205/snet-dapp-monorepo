import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(MUITheme => ({
  stakeTransactionContainer: {
    width: 845,
    paddingBottom: 33,
    borderRadius: 4,
    margin: "0 auto",
    background: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "@media(max-width: 900px)": {
      width: "auto",
      margin: "0 25px",
    },
  },
  header: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    "& h6": {
      padding: "0 22px",
      fontWeight: 400,
      lineHeight: "50px",
    },
  },
  tableHeaderContainer: {
    padding: "12px 11px",
    borderBottom: "1px solid #f6f6f7",
    margin: "0 16px",
    display: "flex",
  },
  tableHeader: {
    padding: 0,
    opacity: 0.53,
    color: MUITheme.palette.text.lightGrey,
    fontSize: 14,
    lineHeight: "18px",
    textTransform: "uppercase",
  },
  tableRow: {
    padding: "14px 11px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    margin: "0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    "& svg": {
      "@media(max-width: 800px)": {
        position: "absolute",
        top: "50%",
        right: 0,
        transform: "translate(-50%)",
      },
    },
    "&:hover": {
      backgroundColor: "#fafafa",
      "& svg": {
        color: MUITheme.palette.primary.main,
      },
    },
    "& > div": {
      "&:last-of-type": { textAlign: "right" },
      "&:not(first-of-type)": {
        "@media(max-width: 800px)": {
          display: "flex",
          alignItems: "center",
        },
      },
    },
    "@media(max-width: 800px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      position: "relative",
    },
  },
  dateId: {
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "18px",
    "@media(max-width: 800px)": { paddingLeft: 20 },
  },
  value: {
    display: "inline-block",
    color: MUITheme.palette.text.darkGrey,
    fontSize: 16,
    lineHeight: "35px",
    "@media(max-width: 800px)": { paddingLeft: 20 },
  },
  unit: {
    paddingLeft: 5,
    display: "inline-block",
    color: MUITheme.palette.text.lightGrey,
    fontSize: 14,
    lineHeight: "18px",
  },
  expandedTable: {
    width: "auto",
    borderRadius: 2,
    margin: "0 16px",
    backgroundColor: "#F5F5F5",
  },
  expandedTableCol: {
    padding: "9px 11px",
    borderBottom: "1px solid #D8D8D8",
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      color: MUITheme.palette.text.lightGrey,
      fontSize: 14,
      letterSpacing: 0.17,
      lineHeight: "18px",
    },
    "@media(max-width: 800px)": { display: "none" },
  },
  expandedTableRow: {
    padding: "6px 11px",
    borderBottom: "1px solid #D8D8D8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p": {
      color: MUITheme.palette.text.primary,
      fontSize: 14,
      lineHeight: "18px",
    },
    "& > div": {
      "@media(max-width: 800px)": { display: "flex" },
    },
    "@media(max-width: 800px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  mobileTitle: {
    paddingRight: 10,
    display: "none",
    color: `${MUITheme.palette.text.darkGrey} !important`,
    letterSpacing: 0.17,
    "@media(max-width: 800px)": { display: "inline-block" },
  },
  pagination: { padding: "125px 56px 0 9px" },
  statusValue: {
    color: `${MUITheme.palette.success.main} !important`,
  },
  noDataFoundSection: {
    textAlign: "center",
    "& p": {
      color: MUITheme.palette.text.primary,
      fontSize: 24,
      fontWeight: 200,
      lineHeight: "30px",
      "& span": { fontWeight: 400 },
    },
  },
  circularProgressContainer: {
    paddingTop: 20,
    textAlign: "center",
    height: 500,
    display: "table",
    width: "100%",
    "& div": {
      color: MUITheme.palette.text.primary,
    },
  },
  loaderChild: {
    display: "table-cell",
    verticalAlign: "middle",
    margin: "0 auto",
  },
  circularProgress: {
    display: "inline-block",
    width: 48,
    height: 48,
  },
  loaderText: {
    color: MUITheme.palette.text.lightShadedGray,
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 0.25,
  },
}));
