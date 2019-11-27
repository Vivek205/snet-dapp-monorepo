

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var customBlue = "#4086ff";
var customHoverBlue = "#005ACB";
var transBlueBorderTextHover = "#005ACB";
var transBlueBorderBgHover = "rgba(0,90,203,0.05)";
var alertBoxColor = "rgba(0,0,0,0.6)";
var alertBoxBorder = "#E67381";
var alertBoxBackgroundColor = "#FDE5E8";
var warningBoxBg = "#FDF3E5";
var warningBoxBorder = "#F18D5A";
var infoBoxBg = "#DEEAFF";
var infoBoxLink = "#067AD7";
var userProfileIconColor = "#757575";
var purple = "#220D3A";
var darkShadedGray = "#212121";
var mediumShadeGray = "#666";
var lightShadedGray = "#9b9b9b";
var grayTitleText = "#4a4a4a";
var succesBoxBg = "#E7FFF8";
var successBoxBorder = "#00C48C";
var lightGray = "#D6D6D6";
var disabledBtnBg = "#ccc";
var gray = "rgba(0,0,0,0.04)";
var gray1 = "#F5F7F8";
var cardBackground = "#f8f8f8";
var iconColor = "#AAAEB3";
var cardSeparator = "#e5e5e5";
var whiteColor = "#fff";
var offWhiteColor = "#fAFAFA";
var offWhite = "rgba(255,255,255,.60)";
var errorBgColor = "rgba(208,2,27,0.2)";
var githubBlack = "#333";
var black1 = "rgba(0,0,0,.87)";
var green = "#00C48C";
var footerBgColor = "#211D24";
var darkOrange = "#AC5C2C";
var orange = "#F29132";
var orange1 = "#FFF8E7";
var RatingStarColor = "#FFC000";
var aqua = "#00C48C";
var errorRed = "#B00020";
var redBtnText = "#D0021B";
var redBtnBg = "#E67381";
var verticalTabLeftBorder = "#e2e2e2";
var inputBoxBorder = "#979797";
var dialogTitle = "rgba(0,0,0,0.87)";
var outlinedBtnHoverBg = "rgba(241,241,241,0.15)";
var h2 = {
  size: 32,
  color: darkShadedGray
};
var offlineRed = "#EF5265";
var offlineRedBg = "rgba(239,82,101,0.15)";
var informationBarBg = "#2196F3";
var infoBg = "#DEEAFF";
var warningBg = "#FDF3E5";
var warningBorder = "#F18D5A";
var theme = (0, _styles.createMuiTheme)({
  palette: {
    text: {
      primary: customBlue,
      white: whiteColor,
      customHoverBlue: customHoverBlue,
      disabledBtnBg: disabledBtnBg,
      black1: black1,
      darkShadedGray: darkShadedGray,
      mediumShadeGray: mediumShadeGray,
      lightShadedGray: lightShadedGray,
      offWhiteColor: offWhiteColor,
      offWhite: offWhite,
      green: green,
      purple: purple,
      darkOrange: darkOrange,
      orange: orange,
      orange1: orange1,
      aqua: aqua,
      lightGray: lightGray,
      gray: gray,
      gray1: gray1,
      cardBackground: cardBackground,
      iconColor: iconColor,
      errorRed: errorRed,
      RatingStarColor: RatingStarColor,
      offlineRed: offlineRed,
      successBoxBorder: successBoxBorder,
      grayTitleText: grayTitleText,
      redBtnText: redBtnText,
      transBlueBorderTextHover: transBlueBorderTextHover,
      transBlueBorderBgHover: transBlueBorderBgHover,
      cardSeparator: cardSeparator,
      userProfileIconColor: userProfileIconColor,
      alertBoxBorder: alertBoxBorder,
      alertBoxColor: alertBoxColor,
      alertBoxBackgroundColor: alertBoxBackgroundColor,
      infoBg: infoBg,
      warningBg: warningBg,
      warningBorder: warningBorder,
      verticalTabLeftBorder: verticalTabLeftBorder,
      redBtnBg: redBtnBg,
      warningBoxBorder: warningBoxBorder,
      warningBoxBg: warningBoxBg,
      infoBoxBg: infoBoxBg,
      infoBoxLink: infoBoxLink,
      inputBoxBorder: inputBoxBorder,
      dialogTitle: dialogTitle,
      outlinedBtnHoverBg: outlinedBtnHoverBg,
      informationBarBg: informationBarBg
    }
  },
  backgroundColor: {
    blue: customBlue,
    red: errorBgColor,
    white: whiteColor,
    githubBlack: githubBlack,
    offlineRedBg: offlineRedBg,
    footerBgColor: footerBgColor,
    succesBoxBg: succesBoxBg
  },
  font: {
    h2: h2
  },
  typography: {
    primary: {
      main: "Muli, sans-serif"
    }
  }
});
var _default = theme;
exports.default = _default;