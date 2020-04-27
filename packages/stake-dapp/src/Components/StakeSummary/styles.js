export const useStyles = MUITheme => ({
  stakeSummaryContainer: { paddingTop: 32 },
  stakeSummaryTitle: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 28,
    lineHeight: "35px",
    textAlign: "center",
  },
  stakeSummaryDetails: {
    paddingLeft: 12,
    marginTop: 32,
    "& > div": {
      display: "flex",
      alignItems: "center",
      [MUITheme.breakpoints.down("sm")]: { marginBottom: 25 },
    },
  },
  stakeSummaryValues: {
    textAlign: "center",
    "& p": {
      "&:first-of-type": {
        color: MUITheme.palette.purple.main,
        fontSize: 50,
        lineHeight: "63px",
        "& span": {
          fontSize: 24,
          fontWeight: 200,
          lineHeight: "30px",
          [MUITheme.breakpoints.down("sm")]: { fontSize: 16 },
        },
        [MUITheme.breakpoints.down("sm")]: {
          fontSize: 22,
          lineHeight: "21px",
        },
      },
      "&:last-of-type": {
        color: MUITheme.palette.text.primary,
        fontSize: 14,
        lineHeight: "34px",
        textTransform: "uppercase",
        [MUITheme.breakpoints.down("sm")]: {
          fontSize: 12,
          lineHeight: "18px",
        },
      },
    },
    [MUITheme.breakpoints.down("sm")]: {
      paddingLeft: 10,
      textAlign: "left",
    },
  },
  // Stake Session Details
  stakeSessionContainer: {
    paddingBottom: 31,
    borderRadius: 4,
    marginTop: 32,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
  },
  stakeSessionHeader: {
    paddingLeft: 22,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    color: MUITheme.palette.text.darkGrey,
    fontSize: 20,
    lineHeight: "50px",
  },
  stakeSessionDetails: {
    padding: "16px 25px",
    border: "1px solid #F1F1F1",
    borderRadius: 6,
    margin: "31px 32px 0",
    backgroundColor: MUITheme.palette.background.mainContent,
    "& > div": {
      "& > div": {
        [MUITheme.breakpoints.down("sm")]: {
          marginBottom: 25,
          "&:last-of-type": { marginBottom: 0 },
        },
      },
    },
  },
  title: {
    fontSize: 16,
    lineHeight: "20px",
  },
  value: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 28,
    lineHeight: "35px",
  },
  unit: {
    paddingLeft: 10,
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
    lineHeight: "20px",
  },
  iconTooltipContainer: {
    display: "flex",
    alignItems: "center !important",
    justifyContent: "end !important",
    position: "relative",
  },
  toolTipContainer: {
    "& > svg": {
      paddingRight: 12,
      color: MUITheme.palette.text.disabled,
      cursor: "pointer",
      fontSize: 18,
      verticalAlign: "middle",
    },
    "& p": {
      width: 377,
      padding: 16,
      borderRadius: 4,
      display: "none",
      position: "absolute",
      bottom: 45,
      left: "50%",
      background: MUITheme.palette.text.lightGrey,
      boxShadow: "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
      color: MUITheme.palette.text.white,
      fontSize: 16,
      lineHeight: "20px",
      transform: "translateX(-50%)",
    },
    "&:hover": {
      "& svg": { color: MUITheme.palette.primary.main },
      "& p": { display: "block" },
    },
  },
  stakeSessionValues: {
    display: "flex",
    alignItems: "baseline",
  },
});
