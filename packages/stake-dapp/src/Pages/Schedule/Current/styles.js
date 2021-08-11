export const useStyles = MUITheme => ({
  currentMainContainer: {
    maxWidth: 1215,
    margin: "32px auto 0",
    fontFamily: MUITheme.typography.fontFamily,
    "& > span": {
      width: "100%",
      marginTop: 50,
      display: "inline-block",
      color: MUITheme.palette.text.primary,
      fontSize: 16,
      fontStyle: "italic",
      fontWeight: 300,
      letterSpacing: 0.25,
      lineHeight: "18px",
      textAlign: "center",
    },
    "@media(max-width:1280px)": { maxWidth: "95%" },
  },
});
