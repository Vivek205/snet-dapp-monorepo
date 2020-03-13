export const useStyles = MUITheme => ({
  styledTextField: {
    background: MUITheme.palette.text.white,
    "& label": { color: MUITheme.palette.text.darkGrey },
    "& div": { color: `${MUITheme.palette.text.darkGrey} !important` },
    "& fieldset": { borderColor: MUITheme.palette.border.inputBorder },
    "& p": { color: MUITheme.palette.text.disabled },
  },
});
