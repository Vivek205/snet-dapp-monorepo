export const useStyles = MUITheme => ({
  registrationHeaderContainer: { 
  	padding: '25px 0',
  	flexWrap: 'nowrap',
  	alignItems: 'center',
  	backgroundColor: MUITheme.palette.background.mainContent 
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexBasis: "100%",
    maxWidth: "71%",
    margin: "0 auto",
    "& h1": {
      width: 230,
      margin: 0,
      "& span": {
        "&:before": { color: MUITheme.palette.purple.main },
      },
      "& img": { width: "100%" },
    },
  },
  headerLink: {
    textAlign: "right",
    '& p':{
    	color: MUITheme.palette.text.lightGrey,
    	fontSize:16,
    	lineHeight: '22px'
    },
    "& a": {
      color: MUITheme.palette.primary.main,
      fontSize: 16,
      fontWeight: 600,
      textDecoration: 'none',
      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
    "@media (max-width:750px)": {
      maxWidth: "100%",
      flexBasis: "100%",
      textAlign: "left",
    },
  },
});
