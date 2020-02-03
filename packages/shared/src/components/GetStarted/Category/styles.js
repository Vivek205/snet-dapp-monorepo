export const useStyles = MUITheme => ({
  CategoryWrapper: {
    width: "80%",
    padding: "32px 0",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: MUITheme.palette.text.lightGrey,
    margin: "0 auto",
    justifyContent: "space-between",
    "@media(max-width:1280px)": { width: "95%" },
    "@media(max-width:960px)": { flexDirection: "column" },
  },
  CategoryContent: {
    paddingLeft: 24,
    "& h3": {
      margin: 0,
      display: "inline-block",
      color: MUITheme.palette.text.darkGrey,
      fontSize: 24,
      fontWeight: 600,
      lineHeight: "30px",
    },
    "& p, & > span, & li": {
      margin: "17px 0 0",
      color: MUITheme.palette.text.primary,
      fontSize: 16,
      lineHeight: "28px",
      "@media(max-width:960px)": { marginTop: 10 },
    },
    "& > span": { display: "inline-block" },
    "& ul": {
      padding: 0,
      margin: 0,
    },
    "& li": {
      marginTop: 0,
      listStyle: "none",
      "&:before": {
        content: '"*"',
        marginRight: 5,
        display: "inline-block",
      },
      "& p": {
        margin: "0 !important",
        display: "inline-block",
      },
      "& span": {
        marginTop: 17,
        display: "inline-block",
      },
    },
    "& a": {
      color: MUITheme.palette.primary.main,
      textDecoration: "none",
    },
    "& button": { marginTop: 20 },
    "@media(max-width:960px)": {
      maxWidth: "100%",
      paddingLeft: 0,
      marginTop: 15,
    },
  },
  reverseDirection: {
    flexDirection: "row-reverse",
    "& div": {
      "&:last-of-type": {
        padding: "0 24px 0 0",
        "@media(max-width:960px)": {
          marginTop: 0,
          paddingRight: 0,
        },
      },
      "@media(max-width:960px)": { padding: "25px 0 0" },
    },
    "@media(max-width:960px)": {
      flexDirection: "column-reverse",
    },
  },
  CategoryMedia: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": { width: "100%" },
    "@media(max-width:960px)": {
      width: 411,
      margin: "0 auto",
    },
  },
  createRequestLink: { textDecoration: "none" },
});
