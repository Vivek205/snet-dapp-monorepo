export const useStyles = MUITheme => ({
  accordionContainer: {
    padding: "32px 8% 0",
    "@media(max-width:600px)": { padding: "32px 0 0" },
  },
  expansionPanel: {
    margin: "0 !important",
    boxShadow: "none",
    "&::before": { display: "none" },
    "&::after": {
      content: "' '",
      width: "100%",
      height: 1,
      display: "block",
      backgroundColor: MUITheme.palette.border.secondary,
    },
    "& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded": {
      "&:hover": {
        backgroundColor: "#fff !important",
        "& .MuiAccordionSummary-content": {
          "& p": { color: MUITheme.palette.text.darkGrey },
        },
        "& .MuiAccordionSummary-expandIcon": { color: "#666" },
      },
    },
    "& .MuiAccordionSummary-root": {
      "&:hover": {
        backgroundColor: "#fafafa",
        "& .MuiAccordionSummary-content": {
          "& p": { color: MUITheme.palette.primary.main },
        },
        "& .MuiAccordionSummary-expandIcon": { color: MUITheme.palette.primary.main },
      },
      padding: "12px 24px",
      "& .MuiAccordionSummary-content": { margin: 0 },
    },

    "& .MuiAccordionDetails-root": {
      padding: "0 62px 29px",
    },
    "& .Mui-expanded": {
      "& p": {
        color: MUITheme.palette.text.darkGrey,
      },
      "& .MuiIconButton-root": {
        "&::before": { width: 0 },
      },
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "auto",
      padding: "12px 24px 8px",
    },
  },
  tabTitle: {
    color: MUITheme.palette.text.primary,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 20,
    lineHeight: "25px",
  },
  tabContent: {
    width: "100%",
    padding: "19px 0",
    display: "flex",
    justifyContent: "space-between",
    "& > div": {
      "& > p": {
        fontFamily: MUITheme.typography.fontFamily,
        "&:first-of-type": {
          margin: 0,
          display: "flex",
          alignItems: "center",
          color: MUITheme.palette.text.lightGrey,
          fontSize: 14,
          lineHeight: "18px",
          "& svg": {
            marginRight: 8,
            color: MUITheme.palette.text.disabled,
            fontSize: 16,
          },
        },
        "&:last-of-type": {
          margin: "4px 0 0",
          color: MUITheme.palette.text.darkGrey,
          fontSize: 22,
          lineHeight: "28px",
          "@media(max-width:1200px)": { fontSize: 18 },
          "& span": {
            paddingLeft: 5,
            color: MUITheme.palette.text.lightGrey,
            fontSize: 12,
            lineHeight: "15px",
          },
        },
      },
      "@media(max-width:1024px)": { marginBottom: 20 },
    },
    "@media(max-width:1024px)": { flexDirection: "column" },
  },
});
