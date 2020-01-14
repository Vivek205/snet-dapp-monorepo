export const useStyles = MUITheme => ({
  teammembersContainer: {
    padding: "40px 0",
    background: MUITheme.palette.background.mainContent,
  },
  backToHomeLink: {
    "& svg": {
      marginRight: 7,
      color: MUITheme.palette.primary.main,
      verticalAlign: "middle",
    },
    "& a": {
      color: MUITheme.palette.primary.main,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 16,
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    },
  },
  topSection: {
    marginBottom: 33,
    display: "flex",
    [MUITheme.breakpoints.down("xs")]: { flexDirection: "column" },
  },
  topSectionContent: {
    marginRight: 51,
    "& h5": {
      marginTop: 21,
      fontWeight: 200,
      lineHeight: "28px",
    },
    [MUITheme.breakpoints.down("xs")]: { marginBottom: 20 },
  },
  topSectionMedia: {
    "& img": { width: 250 },
    [MUITheme.breakpoints.down("xs")]: { textAlign: "center" },
  },
  invitedAndAcceptedList: {
    display: "flex",
    justifyContent: "space-between",
    [MUITheme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  mobileTableHeader: {
    width: "50%",
    marginRight: 5,
    display: "none",
    color: MUITheme.palette.text.lightGrey,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 13,
    textTransform: "uppercase",
  },
});
