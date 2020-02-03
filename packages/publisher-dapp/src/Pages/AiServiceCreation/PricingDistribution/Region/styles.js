import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
  grayBox: {
    padding: "24px 16px 36px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F1F1F1",
    borderRadius: 4,
    backgroundColor: "#F6F6F6",
  },
  card: {
    width: "100%",
    minHeight: 100,
    boxShadow: "none",
    padding: 15,
    border: "1px solid #828282",
    borderRadius: 4,
  },
  cardContainer: { display: "flex" },
  infoIconContainer: {
    "& svg": {
      padding: "5px 10px 0 0",
      fontSize: 20,
      color: "#d6d6d6",
    },
  },
}));
