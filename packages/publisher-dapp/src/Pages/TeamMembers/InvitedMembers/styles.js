export const useStyles = MUITheme => ({
  invitedMembersContainer: {
    width: 411,
    borderRadius: 4,
    background: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    "& h6": {
      padding: "13px 22px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
    },
    "&:first-of-type": {
      marginRight: 25,
    },
    [MUITheme.breakpoints.down("xs")]: {
      width: "auto",
      margin: "0 25px 30px",
    },
  },
  column: {
    display: "flex",
    padding: "15px 10px 8px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.secondary,
    margin: "0 10px",
    "& span": {
      color: MUITheme.palette.text.lightGrey,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 13,
      textTransform: "uppercase",
    },
    [MUITheme.breakpoints.down("sm")]: { display: "none" },
  },
  tableBody: {
    width: "100%",
    maxHeight: 245,
    overflow: "auto",
  },
  data: {
    display: "flex",
    position: "relative",
    padding: "29px 10px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.secondary,
    margin: "0 10px",
    "&:hover": { background: MUITheme.palette.background.mainContent },
    "& > div": {
      [MUITheme.breakpoints.down("sm")]: {
        marginBottom: 15,
        display: "flex",
        flexDirection: "column",
        "&:last-of-type": { marginBottom: 0 },
      },
    },
    [MUITheme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  tableHeaderCell: {
    color: MUITheme.palette.text.darkGrey,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 14,
    letterSpacing: 0.17,
  },
  btnContainer: {
    padding: "22px 0",
    textAlign: "center",
  },
  showMoreIcon: {
    position: "absolute",
    right: 31,
    color: MUITheme.palette.text.lightGrey,
    cursor: "pointer",
    [MUITheme.breakpoints.down("sm")]: {
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
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
    [MUITheme.breakpoints.down("sm")]: { display: "block" },
  },
});
