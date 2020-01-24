export const useStyles = MUITheme => ({
  onboardingContainer: {
    padding: "40px",
    backgroundColor: MUITheme.palette.background.mainContent,
    "& ul": {
      justifyContent: "center",
      "& li": {
        "&:before": {
          marginLeft: 16,
          "@media(max-width:540px)": {
            marginLeft: 10,
            marginRight: 10,
          },
          "@media(max-width:470px)": { display: "none" },
        },
      },
      "@media(max-width:470px)": { alignItems: "flex-start" },
    },
  },
  topSection: {
    textAlign: "center",
    "& h3": { marginBottom: 15 },
    "& span": {
      color: MUITheme.palette.text.primary,
      fontSize: 20,
      fontWeight: 300,
      lineHeight: "28px",
    },
  },
});
