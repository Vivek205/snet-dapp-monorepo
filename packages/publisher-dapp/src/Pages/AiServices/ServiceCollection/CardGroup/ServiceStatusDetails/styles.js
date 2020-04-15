export const useStyles = MUITheme => ({
  serviceStatusDetailsMainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  statusDetails: {
    display: "flex",
    alignItems: "baseline",
    '& p[data-status-type="DRAFT"], p[data-status-type="PUBLISHED"],p[data-status-type="APPROVED"] ': {
      color: MUITheme.palette.warning.main,
    },
    '& p[data-status-type="OFFLINE"],  p[data-status-type="REJECTED"]': { color: MUITheme.palette.text.statusRed },
    '& p[data-status-type="ACTIVE"]': { color: MUITheme.palette.success.main },
  },
  property: {
    color: `${MUITheme.palette.text.darkGrey} !important`,
    fontSize: "16px !important",
    lineHeight: "20px",
    textTransform: "uppercase",
  },
  value: {
    paddingLeft: 16,
    fontSize: "18px !important",
    lineHeight: "23px",
    textTransform: "uppercase",
  },
  serviceStatusActions: {
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: "rgba(151, 151, 151, 0.15)",
    display: "flex",
    "& button": {
      "&:first-of-type": { marginRight: 40 },
    },
    "& a": {
      width: "auto",
      textDecoration: "none",
    },
    "@media(max-width:1040px)": {
      flexDirection: "column",
      alignItems: "center",
      "& button": {
        marginTop: 10,
        "&:first-of-type": { marginRight: "0 !important" },
      },
    },
    [MUITheme.breakpoints.down("sm")]: { marginTop: 50 },
  },
  tabsHeader: {
    width: "80%",
    margin: "15px 0 24px",
    background: "#fff",
    color: MUITheme.palette.text.lightGrey,
    boxShadow: "none",
    "& button": {
      minWidth: "auto",
      padding: 0,
      marginRight: 40,
      fontSize: 20,
      textTransform: "none",
      color: MUITheme.palette.text.lightShadedGray,
      fontFamily: MUITheme.typography.primary,
      "@media(max-width: 1090px)": {
        marginRight: 30,
        fontSize: 16,
      },
    },
    "& .Mui-selected": {
      color: MUITheme.palette.primary.main,
      fontWeight: 600,
    },
    "& .MuiTabs-indicator": { backgroundColor: MUITheme.palette.primary.main },
  },
});
