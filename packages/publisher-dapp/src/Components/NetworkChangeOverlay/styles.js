export const useStyles = theme => ({
  card: {
    maxWidth: 345,
    margin: "200px auto 0",
    textAlign: "center",
    "& h4": {
      margin: 0,
      color: theme.palette.text.darkGrey,
      fontFamily: theme.typography.fontFamily,
      fontSize: 22,
      fontWeight: 600,
    },
    "& .MuiCardContent-root": {
      padding: "0 20px",
      "& p": { marginBottom: 20 },
    },
  },
  cardContent: {
    margin: "10px 0",
  },
});
