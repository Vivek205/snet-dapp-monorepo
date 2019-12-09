import MuiList from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";

const SNETList = withStyles({
  root: props => {
    if (props.display === "inline") {
      return {
        display: "flex",
        flexDirection: "row",
        padding: 0,
      };
    }
  },
})(MuiList);

export default SNETList;
