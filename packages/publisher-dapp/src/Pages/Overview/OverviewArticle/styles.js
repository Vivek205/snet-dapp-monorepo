export const useStyles = MUITheme => ({
  overviewArticleContainer: {
    padding: "40px 60px 68px",
    display: "flex",
    "& button": { padding: "13px 95px 11px" },
    background: MUITheme.palette.background.mainContent,
    [MUITheme.breakpoints.down("sm")]: {
      padding: "40px 20px",
      flexDirection: "column",
    },
  },
  overviewArticleContent: {
    marginRight: 24,
    [MUITheme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginBottom: 25,
    },
    "& a": { textDecoration: "none" },
  },
  description: {
    color: MUITheme.palette.text.primary,
    fontSize: 20,
    lineHeight: "28px",
  },
  reverseDirection: {
    padding: "67px 60px 61px",
    flexDirection: "row-reverse",
    backgroundColor: MUITheme.palette.background.white,
    "& button": { padding: "13px 69px 11px" },
    "& > div:first-of-type": {
      marginRight: 0,
      marginLeft: 24,
    },
    [MUITheme.breakpoints.down("sm")]: {
      padding: "40px 20px",
      flexDirection: "column",
    },
  },
  checkCircleIcon: {
    width: 24,
    marginRight: 16,
    color: MUITheme.palette.success.main,
  },
  mediaContainer: {
    maxWidth: 634,
    margin: "0 auto",
    "& img": { width: "100%" },
  },
  listItemText: {
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    lineHeight: "24px",
    "& span": {
      color: MUITheme.palette.text.darkGrey,
      fontWeight: 600,
    },
  },
});
