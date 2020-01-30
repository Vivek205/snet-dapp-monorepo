import React, { useState } from "react";
import Pagination from "material-ui-flat-pagination";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";

import { useStyles } from "./styles";

const SNETPagination = ({ limit, offset, totalCount, handleChange, itemsPerPageOptions, from, to }) => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const classes = useStyles();

  const handleItemsPerPage = event => {
    setItemsPerPage(event.target.value);
  };

  const handlePageChange = selectedOffset => {
    if (selectedOffset === parseFloat(offset)) {
      return;
    }
  };

  return (
    <Grid container spacing={24} className={classes.paginationContainer}>
      <Grid item xs={6} sm={6} md={6} lg={6} className={classes.pagination}>
        <Pagination
          limit={limit}
          offset={offset}
          total={totalCount}
          reduced={true}
          onClick={(e, offset) => handlePageChange(offset)}
          className={classes.styledPagination}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} className={classes.pageCountSection}>
        <span className={classes.itemPerPageTxt}>Items per page</span>
        <FormControl variant="outlined" className={classes.pageListformControl}>
          <Select
            value={itemsPerPage}
            input={<OutlinedInput labelWidth={75} name="age" id="outlined-age-simple" onChange={handleItemsPerPage} />}
            className={classes.selectBox}
          >
            {itemsPerPageOptions.map((item, index) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <span>
          {from}-{to} of {totalCount}
        </span>
      </Grid>
    </Grid>
  );
};

export default SNETPagination;
