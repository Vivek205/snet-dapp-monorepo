export const useStyles = MUITheme => ({
  launchServiceContainer: {
    boxSizing: "border-box",
    width: 845,
    margin: "48px auto 0",
    [MUITheme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0 25px",
    },
  },
  box: {
    borderRadius: 4,
    marginBottom: 27,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    "& > h6": {
      padding: "0 23px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
      lineHeight: "50px !important",
    },
    [MUITheme.breakpoints.down("sm")]: { width: "100%" },
  },
  reviewProcessDescription: {
    padding: " 20px 21px 22px",
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    lineHeight: "24px",
  },
  table: {
    padding: "0 21px",
    "& > div": { display: "flex" },
  },
  tableColumn: {
    [MUITheme.breakpoints.down("xs")]: { display: "none !important" },
  },
  th: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 13,
    textTransform: "uppercase",
    lineHeight: "16px",
  },
  tableData: {
    padding: "28px 0",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.grey,
    "& > div": {
      paddingRight: 10,
      "& > div": { display: "flex" },
    },
    "& div": {
      [MUITheme.breakpoints.down("xs")]: {
        display: "flex",
        alignItems: "center",
      },
    },
    [MUITheme.breakpoints.down("xs")]: { flexDirection: "column" },
  },
  td: {
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "21px",
  },
  mobileTH: {
    display: "none",
    paddingRight: 10,
    color: MUITheme.palette.text.lightGrey,
    fontSize: 13,
    textTransform: "uppercase",
    [MUITheme.breakpoints.down("xs")]: { display: "flex" },
  },
  tickIcon: {
    padding: "0 12px 0 8px",
    color: MUITheme.palette.success.main,
  },
  hourglassIcon: {
    padding: "0 17px 0 8px",
    color: MUITheme.palette.warning.main,
  },
  downCaretIcon: { color: MUITheme.palette.text.lightGrey },
  alertBoxBtnContainer: {
    marginTop: 25,
    textAlign: "center",
    "& > div": { margin: "0 32px" },
    "& p": { margin: "0 32px 20px" },
    "& button": {
      padding: "13px 135px 13px",
      margin: "25px 0 32px",
    },
  },
  messageReviewContainer: {
    "& h6": {
      padding: "0 23px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
      lineHeight: "50px !important",
    },
    "& > div": {
      padding: "26px 38px",
      "& div": { width: "100%" },
    },
    "& button": { margin: "0 0 17px 38px" },
  },
  actionsColumn: {
    paddingRight: 16,
    textAlign: "right",
  },
});
