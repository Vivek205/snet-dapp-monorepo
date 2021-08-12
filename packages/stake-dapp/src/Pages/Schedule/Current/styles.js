export const useStyles = MUITheme => ({
  currentMainContainer: {
    maxWidth: 1215,
    margin: "32px auto 0",
    fontFamily: MUITheme.typography.fontFamily,
    "@media(max-width:1280px)": { maxWidth: "95%" },
  },
});
