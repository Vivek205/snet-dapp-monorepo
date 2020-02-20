export const useStyles = MUITheme => ({
  stakeTransactionContainer: {
    paddingBottom: 33,
    borderRadius: 4,
    background: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    "& h6": {
      padding: "0 22px",
      fontWeight: 400,
      lineHeight: "50px",
    },
  },
  tabsContainer: {
    "@media(max-width: 1280px)": { paddingLeft: 0 },
  },
  appBar: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#e2e2e2",
    marginBottom: 46,
    position: "relative",
    backgroundColor: "transparent",
    boxShadow: "none",
    "& button": {
      color: MUITheme.palette.text.lightGrey,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 20,
      textTransform: "capitalize",
      lineHeight: "25px",
      "&:nth-child(n+3)": {
        "@media(max-width:720px)": { display: "none" },
      },
    },
    "& .MuiTab-textColorPrimary.Mui-selected": { fontWeight: 600 },
    "& .PrivateTabIndicator-colorPrimary-289": {
      backgroundColor: MUITheme.palette.text.primary,
    },
  },
  tabDetailsContainer: {
    minHeight: 200,
    position: "relative",
    "& .MuiExpansionPanel-root": { marginBottom: 10 },
    "& .MuiPaper-elevation1": { boxShadow: "none" },
  },
});
