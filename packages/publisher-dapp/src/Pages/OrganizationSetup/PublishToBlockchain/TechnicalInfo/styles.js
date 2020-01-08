export const useStyles = MUITheme => ({
  technicalInfoContainer: {
    padding: "31px 0 0",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: MUITheme.palette.border.grey,
    margin: "31px 24px 0",
    "& h6": {
      padding: "0 !important",
      border: "none !important",
      marginBottom: 15,
      fontWeight: "normal",
      lineHeight: "23px",
    },
  },
  alertBoxAndBtnContainer: { 
    alignItems: 'center',
    '& p':{ margin: 0 }
  },
  connectMetamaskBtn: { paddingLeft: 30 },
  groupInfoContainer:{
    '& h6':{ margin: '15px 0' }
  }
});
