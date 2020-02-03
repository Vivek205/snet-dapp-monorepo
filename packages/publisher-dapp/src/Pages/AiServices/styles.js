export const useStyles = MUITheme => ({
  AiServicesMainContainer: {
    marginTop: 60,
    padding: "40px 70px 30px 0",
  },
  descriptionContainer: {
    display: "flex",
    [MUITheme.breakpoints.down("sm")]: { flexDirection: "column" },
  },
  descriptionTitle: { lineHeight: "48px" },
  description: {
    margin: "15px 0 60px",
    fontWeight: 100,
    lineHeight: "28px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [MUITheme.breakpoints.down("sm")]: { maxWidth: "100%" },
  },
  media: {
    "& img": { width: 302 },
    [MUITheme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      marginTop: 50,
      textAlign: "center",
    },
  },
});
