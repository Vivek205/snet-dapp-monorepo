export const useStyles = menuItem => ({
  button: {
    "& span": {
      textTransform: "none",
    },
  },
  menuItem: {
    fontFamily: menuItem.typography.fontFamily,
  },
});
