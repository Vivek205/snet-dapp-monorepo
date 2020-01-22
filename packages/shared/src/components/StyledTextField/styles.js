export const useStyles = theme => ({
  styledTextField: {
    background: theme.palette.text.white,
    "& label": { color: theme.palette.text.black1 },
    "& div": { color: "#212121 !important" },
    "& fieldset": { borderColor: "#828282 !important" },
    "& p": { color: theme.palette.text.lightGrey },
  },
});
