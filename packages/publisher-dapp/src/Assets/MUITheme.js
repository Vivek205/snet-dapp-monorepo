import { createMuiTheme } from "@material-ui/core/styles";

const MUITheme = createMuiTheme({
  palette: {
  	text:{
  		primary: '#666',
  		secondary: '#fff',
  		disabled: '#D6D6D6',
  		red: "#D0021B",
  		hover:{
  			blue: "#005ACB",
  			red: "#D0021B",
  			black: '#333',
  		},
  	},
  	primary:{
  		main: '#4086ff',
  	},
    background: {
    	disabled:{
    		gray: '#D6D6D6',
    	},
    	hover:{
    		blue: 'rgba(0,90,203,0.05)',
    		transparentBlue: 'rgba(64,134,255,0.1)',
    		red: "#D0021B",
    		black: '#333',
  		},
    	mainContent: '#fafafa',
      footer: "#211D24",
      white: '#fff',
      black: '#333',
      red: "#D0021B"
    },
    checkCircle: '#00C48C'
  },
  typography:{
  	fontFamily: 'Muli',
  	h2:{
  		color: 'rgba(0,0,0,0.87)',
  		fontSize: 36,
  		fontWeight: 600,
  		lineHeight: '45px'
  	},
  	body1:{
  		color: '#616161',
  		fontSize: 18,
  		lineHeight: '28px'
  	}
  }
});

export default MUITheme;
