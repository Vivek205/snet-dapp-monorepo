export const useStyles = MUITheme => ({
  accordionContainer: { padding: "32px 8% 0" },
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
          "& p": { color: MUITheme.palette.text.primary },
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
      padding: "0 40px 22px",
    },
    "& .Mui-expanded": {
      "& p": {
        color: MUITheme.palette.text.primary,
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
  question: {
    color: MUITheme.palette.text.primary,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 20,
    lineHeight: "25px",
  },
  answer: {
    color: MUITheme.palette.text.primary,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 16,
    lineHeight: "24px",
    "& h3": {
      color: MUITheme.palette.text.primary,
      fontFamily: MUITheme.typography.main,
    },
    "& img": {
      width: 600,
      margin: "0 auto",
      display: "block",
    },
    "& a": {
      color: MUITheme.palette.primary.main,
      textDecoration: "none",
    },
    "& li": { listStyle: "none" },
  },
});
