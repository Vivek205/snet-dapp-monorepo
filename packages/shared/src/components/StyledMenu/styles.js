export const useStyles = MUITheme => ({
  button: {
    "& span": {
      textTransform: "none",
    },
  },
  menuItem: {
    "& a": {
      color: MUITheme.palette.text.lightGrey,
      fontSize: 16,
    },
  },
});
