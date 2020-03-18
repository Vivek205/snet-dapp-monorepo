export const useStyles = MUITheme => ({
  serviceCreationContainer: {
    paddingTop: 60,
    "& h3": { lineHeight: "48px" },
    "& > div": {
      "&:nth-child(2)": { width: 700 },
    },
    "& ul": {
      "& li": {
        "& div": {
          "& span": {
            "&::after": { width: 125 },
          },
        },
      },
    },
  },
  topSection: {
    padding: "0 10px",
    textAlign: "center",
    "& span": {
      marginTop: 16,
      display: "inline-block",
      color: MUITheme.palette.text.primary,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 20,
      fontWeight: 200,
      lineHeight: "28px",
    },
    "& + div": { paddingTop: 48 },
  },
  description: {
    paddingTop: 15,
    color: MUITheme.palette.text.primary,
    fontSize: 20,
    fontWeight: 300,
    lineHeight: "28px",
  },
});
