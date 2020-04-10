export const useStyles = MUITheme => ({
  card: {
    width: 302,
    marginLeft: "3%",
    "&:first-of-type": { marginLeft: 0 },
    [MUITheme.breakpoints.down("sm")]: {
      margin: "25px 0 0",
      "&:first-of-type": { marginTop: 0 },
    },
  },
  cardHeader: { padding: "9px 13px 0 16px" },
  cardTitle: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 0.23,
    lineHeight: "23px",
  },
  cardContent: { padding: 0 },
  cardDescription: {
    padding: "15px 18px",
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: "21px",
  },
  cardActions: {
    padding: "0 0 13px",
    "& button": { padding: "11px 23px 9px" },
  },
});
