export const useStyles = MUITheme => ({
  // SignUp container
  signUpContainer: {
    padding: "51px 64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    textAlign: "center",
    "& h2": { textAlign: "left" },
    "& p": {
      padding: "32px 0",
      color: MUITheme.palette.text.primary,
      fontSize: 16,
      lineHeight: "24px",
      textAlign: "left",
    },
    "& form": {
      display: "flex",
      alignItems: "center",
      "& > div": {
        width: 370,
        marginRight: 24,
        "& > div": {
          maxWidth: "100%",
          flexBasis: "100%",
          "& .MuiFormControl-marginNormal": { margin: 0 },
        },
        "& label": {
          color: MUITheme.palette.text.lightGrey,
          fontSize: 16,
          letterSpacinng: 0,
          lineHeight: "20px",
        },
        "& .MuiInputLabel-formControl": { top: -5 },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(25,25,25,0.32)" },
        "@media(max-width: 420px)": { marginRight: 0 },
      },
      "@media(max-width: 420px)": { flexDirection: "column" },
      [MUITheme.breakpoints.down("sm")]: { marginTop: 25 },
    },
    "& button": {
      padding: "19px 33px 17px",
      "@media(max-width: 420px)": { marginTop: 15 },
    },
    "& img": {
      width: 478,
      "@media(max-width: 1098px)": { width: "100%" },
      "@media(max-width: 960px)": {
        width: 487,
        marginTop: 25,
      },
      "@media(max-width: 600px)": { width: "100%" },
    },
    [MUITheme.breakpoints.down("sm")]: {
      padding: "51px 15px",
      flexDirection: "column",
    },
  },
});
