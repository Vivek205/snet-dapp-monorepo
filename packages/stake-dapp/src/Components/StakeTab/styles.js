export const useStyles = theme => ({
  mainSection: {
    padding: "48px 0 60px",
    "& div": {
      "@media(max-width: 1024px)": { maxWidth: "100%" },
    },
    "@media(max-width: 1280px)": { paddingBottom: 30 },
    "@media(max-width: 1024px)": { flexDirection: "column" },
  },
  servieMainContainer: {},
  tabsContainer: {
    paddingLeft: 25,
    "@media(max-width: 1280px)": { paddingLeft: 0 },
  },
  header: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.text.secodary,
    marginBottom: 16,
    position: "relative",
    backgroundColor: "transparent",
    boxShadow: "none",
    "& button": {
      color: theme.palette.text.primary,
      fontFamily: theme.palette.primary.main,
      fontSize: 18,
      textTransform: "capitalize",
      lineHeight: "23px",
      "&:nth-child(n+3)": {
        "@media(max-width:720px)": { display: "none" },
      },
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: theme.palette.text.primary,
      fontWeight: "bold",
    },
    "& .PrivateTabIndicator-colorPrimary-289": {
      backgroundColor: theme.palette.text.primary,
    },
  },
  tabDetailsContainer: {
    minHeight: 200,
    position: "relative",
    "& .MuiExpansionPanel-root": { marginBottom: 10 },
    "& .MuiPaper-elevation1": { boxShadow: "none" },
  },
});
