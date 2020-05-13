export const useStyles = MUITheme => ({
  pendingClaimsAndTotalContainer: {
    marginBottom: 24,
    display: "flex",
    justifyContent: "space-between",
    "& > div": {
      padding: "10px 12px",
      background: MUITheme.palette.background.mainContent,
      "&:first-of-type": { marginRight: 4 },
    },
    "@media(max-width:1040px)": { paddingRight: 70 },
  },
  title: {
    width: 120,
    display: "inline-block",
    color: MUITheme.palette.text.primary,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 14,
  },
  value: {
    color: MUITheme.palette.text.darkGrey,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 16,
  },
  btnContainer: {
    "& button": { padding: 0 },
  },
});
