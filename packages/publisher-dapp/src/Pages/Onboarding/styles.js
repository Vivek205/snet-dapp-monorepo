export const useStyles = MUITheme => ({
onboardingContainer: {
    paddingBottom: 40,
    backgroundColor: MUITheme.palette.text.offWhiteColor,
    "& ul": {
      justifyContent: "center",
      "& li": {
        "&:before": { marginLeft: 16 },
      },
    },
  },
topSection: {
    textAlign: "center",
    "& h2": {
      color: MUITheme.palette.text.darkShadedGray,
      fontSize: 32,
    },
    "& p": {
      margin: "20px 0 0",
      color: MUITheme.palette.text.mediumShadeGray,
      fontSize: 20,
      lineHeight: "30px",
    },
  },
})