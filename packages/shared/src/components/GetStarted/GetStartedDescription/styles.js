export const useStyles = MUITheme => ({
  GetStartedDescription: {
    marginBottom: 40,
    "& h2": {
      margin: 0,
      color: MUITheme.palette.text.darkGrey,
      fontSize: 36,
      fontWeight: 600,
      lineHeight: "45px",
    },
    "& p": {
      margin: 0,
      color: MUITheme.palette.text.lightGrey,
      fontSize: 24,
      lineHeight: "30px",
      "@media(max-width:1024px)": { marginTop: 10 },
    },
    "& button": {
      padding: "13px 16% 11px",
      marginTop: 16,
    },
  },
});
