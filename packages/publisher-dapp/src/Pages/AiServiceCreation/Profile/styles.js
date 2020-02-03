export const useStyles = MUITheme => ({
  profileContainer: {
    width: 845,
    paddingBottom: 144,
    margin: "48px auto 0",
    [MUITheme.breakpoints.down("sm")]: { width: "100%" },
  },
  box: {
    paddingBottom: 33,
    borderRadius: 4,
    marginBottom: 27,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    "& > h6": {
      padding: "0 23px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
      lineHeight: "50px !important",
    },
    "& .MuiTypography-subtitle1": { fontWeight: "normal" },
  },
  wrapper: {
    padding: "0 22px",
    "& .MuiTextField-root + span": {
      marginBottom: 0,
    },
  },
  description: {
    margin: "7px 0 15px",
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    lineHeight: "21px",
  },
  publishingCompanyContainer: {
    display: "flex",
    alignItems: "center",
    "& > div": {
      "& > div:first-of-type": {
        maxWidth: "100%",
        flexBasis: "100%",
      },
    },
    "& > div + div": { marginLeft: 30 },
  },
  profileImgContainer: { padding: "30px 0 41px" },
  uploaderContentConatiner: { display: "flex" },
  profileImgContent: {
    paddingTop: 60,
    marginLeft: 28,
    "& h6:first-of-type": { marginBottom: 25 },
  },
  images: {
    display: "flex",
    marginTop: 12,
    "& img": { width: "100%" },
  },
  largeImg: { width: 302 },
  smallerImg: {
    width: 207,
    marginLeft: 20,
  },
  imgDimensionDetails: {
    marginTop: 12,
    display: "inline-block",
    color: MUITheme.palette.text.lightGrey,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: "20px",
  },
  galeryWrapper: {
    display: "flex",
    "& h6": {
      paddingTop: 60,
      marginLeft: 28,
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    "& button": {
      "&:nth-child(2)": { margin: "0 25px 0 35px" },
    },
  },
});
