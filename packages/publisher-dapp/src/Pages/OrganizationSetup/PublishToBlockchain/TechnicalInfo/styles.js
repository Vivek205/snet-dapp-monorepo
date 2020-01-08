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
      fontWeight: "normal",
      lineHeight: "23px",
    },
  },
  alertBoxAndBtnContainer: { alignItems: 'center' },
  connectMetamaskBtn: { paddingLeft: 30 },
  groupInfoContainer:{
    '& h6':{ margin: '10px 0 15px' }
  }
});
