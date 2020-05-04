export const useStyles = MUITheme => ({
  overiewMainContainer: {
    "& h2": { marginBottom: 32 },
    "& ul": {
      padding: 0,
      marginTop: 32,
    },
    "& li": {
      padding: 0,
      marginBottom: 16,
      alignItems: "flex-start",
      "&:last-of-type": { marginBottom: 0 },
    },
    "& .MuiListItemIcon-root": { minWidth: "auto" },
    "& button, & a": { marginTop: 32 },
    "& img": { width: "100%" },
    "& > div": {
      "&:first-of-type": {
        padding: "60px 60px 54px",
        background: "linear-gradient(134.77deg, #2196F3 0%, #512DA8 100%)",
        "& > div": {
          "&:first-of-type": {
            paddingTop: 20,
            "& button": {
              border: "2px solid #fff",
              color: MUITheme.palette.text.white,
            },
          },
        },
      },
    },
  },
  checkCircleIcon: {
    width: 20,
    marginRight: 16,
    color: MUITheme.palette.success.main,
  },
  features: {
    padding: "40px 60px !important",
    display: "flex",
    background: MUITheme.palette.background.white,
    [MUITheme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "40px 20px !important",
    },
  },
  featuresContent: {
    marginRight: 24,
    [MUITheme.breakpoints.down("sm")]: {
      marginTop: 25,
      marginRight: 0,
    },
  },
  btnContainer: { textAlign: "center" },
});
