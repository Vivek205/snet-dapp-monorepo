export const useStyles = MUITheme => ({
  howItWorksContainer: { backgroundColor: MUITheme.palette.background.mainContent },
  bannerContainer: {
    padding: "24px 137px 0",
    backgroundColor: "rgba(34,13,58,0.6)",
  },
  bannerDesFormContainer: { display: "flex" },
  bannerTitle: {
    color: MUITheme.palette.text.white,
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: -0.56,
    lineHeight: "48px",
  },
  bannerDescPara1: {
    paddingTop: 44,
    color: MUITheme.palette.text.white,
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
  },
  bannerDescPara2: {
    paddingTop: 48,
    color: MUITheme.palette.text.white,
    fontSize: 22,
    fontWeight: 200,
    lineHeight: "32px",
    textShadow: "0 2px 2px rgba(0,0,0,0.3)",
  },
  bannerForm: { paddingLeft: 24 },
  form: {
    width: 628,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
  },
  formHeader: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    textAlign: "center",
    "& p": {
      color: MUITheme.palette.text.darkGrey,
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "50px",
    },
  },
  stakedRewardAmt: {
    padding: "24px 22px 0",
    display: "flex",
    alignItems: "flex-start",
    "& > div": {
      width: 240,
      "& > div": {
        maxWidth: "100%",
        flexBasis: "100%",
        "& .MuiTextField-root": { marginTop: 0 },
      },
    },
    "& svg": {
      padding: "13px 33px 0",
      color: "#d6d6d6",
      fontSize: 33,
    },
  },
  stakingDetails: {
    padding: "0 22px",
    display: "flex",
    "& svg": {
      color: "#d6d6d6",
      fontSize: 20,
    },
  },
  iconTitlContainer: {
    display: "flex",
    "& p": {
      padding: "0 0 8px 8px",
      color: MUITheme.palette.text.darkGrey,
      fontSize: 16,
      lineHeight: "20px",
    },
  },
  valuesConatiner: {
    width: 182,
    padding: "15px 0",
    border: "1px solid #828282",
    borderRadius: 4,
    marginRight: 17,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  values: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 16,
    lineHeight: "20px",
  },
  unit: {
    paddingLeft: 8,
    color: MUITheme.palette.text.darkGrey,
    fontSize: 12,
    lineHeight: "15px",
  },
  incubationValuesConatiner: {
    width: 180,
    padding: "15px 0",
    border: "1px solid #828282",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
  },
  formBtnContainer: {
    padding: "31px 0 29px",
    display: "flex",
    justifyContent: "center",
  },
  countDownContainer: {
    padding: "11px 0",
    borderRadius: "0 4px 4px 4px",
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(34,13,58,0.6)",
  },
  countDownTitle: {
    paddingRight: 70,
    display: "flex",
    alignItems: "center",
    "& svg": {
      paddingRight: 15,
      color: MUITheme.palette.text.white,
      fontSize: 18,
    },
    "& p": {
      color: MUITheme.palette.text.white,
      fontSize: 28,
      lineHeight: "35px",
      "&:first-of-type": { fontWeight: 200 },
      "&:last-of-type": { fontWeight: 600 },
    },
  },
  countDownValue: {
    color: MUITheme.palette.text.white,
    fontSize: 50,
    lineHeight: "63px",
  },
  countDownUnit: {
    color: MUITheme.palette.text.white,
    fontSize: 14,
    lineHeight: "21px",
    textTransform: "uppercase",
  },
  countDown: {
    display: "flex",
    "& > div": {
      padding: "0 31px",
      borderRightWidth: 0.5,
      borderRightStyle: "solid",
      borderRightColor: MUITheme.palette.text.white,
      textAlign: "center",
    },
  },

  // Benefits Styling
  benefitsContainer: {
    padding: "64px 60px",
    display: "flex",
  },
  benefitsMedia: { textAlign: "center" },
  benefitsContent: {
    "& ul": {
      padding: 0,
      margin: "32px 0",
      "& li": {
        paddingBottom: 24,
        display: "flex",
        listStyle: "none",
        "& svg": {
          paddingTop: 5,
          color: MUITheme.palette.success.main,
          fontSize: 20,
        },
        "& div": {
          paddingLeft: 16,
          "& p": {
            display: "inline",
            fontSize: 16,
            lineHeight: "24px",
            "&:first-of-type": {
              color: MUITheme.palette.text.darkGrey,
              fontWeight: 600,
            },
            "&:last-of-type": { color: MUITheme.palette.text.primary },
          },
        },
        "&:last-of-type": { paddingBottom: 0 },
      },
    },
    "& button": { padding: "13px 98px 11px" },
  },

  // SignUp container
  signUpContainer: {
    padding: "16px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: MUITheme.palette.purple.main,
    opacity: 0.87,
    textAlign: "center",
    "& p": {
      color: MUITheme.palette.text.white,
      fontSize: 20,
      letterSpacing: 0.19,
      lineHeight: "24px",
    },
    "& input": {
      boxSizing: "border-box",
      width: 255,
      height: "90%",
      padding: "0 15px",
      border: "none",
      borderRadius: 2,
      margin: "0 8px 0 13px",
    },
  },
});
