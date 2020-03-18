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
    width: 590,
    padding: "0 10px",
    margin: "0 auto",
    textAlign: "center",
    "& span": {
      marginTop: 16,
      display: "inline-block",
      color: MUITheme.palette.text.primary,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 20,
      lineHeight: "28px",
    },
    "& + div": { paddingTop: 33 },
  },
  description: {
    paddingTop: 15,
    color: MUITheme.palette.text.primary,
    fontSize: 20,
    fontWeight: 300,
    lineHeight: "28px",
  },
});
