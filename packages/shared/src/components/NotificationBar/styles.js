export const useStyles = MUITheme => ({
  NotificationBar: {
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
  },
  notificationText: {
    padding: "8px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      fontSize: 14.2,
      letterSpacing: 0.25,
      lineHeight: "20px",
    },
  },
  WARNING: {
    backgroundColor: MUITheme.palette.background.warningBox,
    color: MUITheme.palette.text.primary,
    "& svg": {
      marginRight: 17,
      color: MUITheme.palette.border.warningBox,
    },
  },
  INFORMATION: {
    backgroundColor: MUITheme.palette.background.infoBox,
    color: MUITheme.palette.text.white,
    "& svg": { marginRight: 21 },
  },
});
