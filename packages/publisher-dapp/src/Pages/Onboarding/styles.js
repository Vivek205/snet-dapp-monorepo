export const useStyles = MUITheme => ({
onboardingContainer: {
    paddingTop: 40,
    backgroundColor: MUITheme.palette.background.mainContent,
    "& ul": {
      justifyContent: "center",
      "& li": {
        "&:before": { marginLeft: 16 },
      },
    },
  },
topSection: {
    textAlign: "center",
    "& span": {
      margin: "15px 0 0",
      display: 'inline-block',
      color: MUITheme.palette.text.primary,
      fontSize: 20,
      fontWeight: 300,
      lineHeight: "28px",
    },
  },
})