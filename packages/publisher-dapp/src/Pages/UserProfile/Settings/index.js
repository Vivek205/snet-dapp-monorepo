import React from "react";
import { useSelector } from "react-redux";

import Grid from "@material-ui/core/Grid";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

const selectState = state => ({
  nickname: state.user.nickname,
  email: state.user.email,
});

const Settings = ({ history }) => {
  const { nickname, email } = useSelector(selectState);

  const handleChangePassword = () => {
    history.push(GlobalRoutes.FORGOT_PASSWORD.path);
  };

  return (
    <Grid container spacing={24}>
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <h3>Settings</h3>
        <div>
          <div>
            <SNETTextfield
              id="outlined-name"
              label="Nick Name (20 char max)"
              value={nickname}
              margin="normal"
              variant="outlined"
              disabled
            />
            <p>Your nickname will be visible to other users when you post comments.</p>
          </div>
          <div>
            <SNETTextfield id="outlined-name" label="Email" value={email} margin="normal" variant="outlined" disabled />
          </div>
          <div>
            <h4>Password</h4>
            <SNETButton color="primary" variant="text" children="Change Password" onClick={handleChangePassword} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Settings;
