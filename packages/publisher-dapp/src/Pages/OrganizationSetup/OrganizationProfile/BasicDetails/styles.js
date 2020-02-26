export const useStyles = () => ({
  basicDetailsContainer: { padding: "16px 24px 0" },
  description: {
    padding: "0 0 25px !important",
    borderBottomWidth: "0 !important",
    "& + div": {
      padding: "0 30px",
      marginBottom: 16,
      "& + div": {
        padding: "0 30px",
        marginBottom: 16,
      },
    },
  },
  basicDetailsTextfield: { backgroundColor: "red" },
  orgWebsiteUrl: { padding: "0 30px" },
});
