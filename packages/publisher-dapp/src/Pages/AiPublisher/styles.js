export const useStyles = MUITheme => ({
  AiPublisherMainContainer: {
    paddingTop: 26,
    backgroundColor: MUITheme.palette.background.mainContent,
  },
  rightSection: {
    "& p": {
      color: MUITheme.palette.text.darkGrey,
      fontSize: 22,
    },
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
