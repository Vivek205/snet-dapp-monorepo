export const useStyles = MUITheme => ({
  AiServicesMainContainer: {
    marginTop: 60,
    padding: "40px 70px 30px 0",
    backgroundColor: MUITheme.palette.background.mainContent,
  },
  descriptionContainer: {
    display: "flex",
  },
  descriptionTitle: {
    fontWeight: "bold",
    lineHeight: "28px",
  },
  description: {
    margin: "8px 0 20px",
    fontWeight: 100,
    lineHeight: "28px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  media: {
    "& img": { width: 302 },
  },
});
