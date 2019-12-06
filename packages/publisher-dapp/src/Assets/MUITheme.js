import { createMuiTheme } from "@material-ui/core/styles";

const MUITheme = createMuiTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
  	text:{
  		primary: '#666',
  		secondary: '#fff',
  		disabled: '#D6D6D6',
  		red: "#D0021B",
      darkGray: '#212121',
      lightGray: '#9b9b9b',
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
    		blue: '#ecf3fe',
    		red: "#D0021B",
    		black: '#333',
  		},
    	mainContent: '#fafafa',
      footer: "#211D24",
      white: '#fff',
      black: '#333',
      red: "#D0021B"
    },
    success: '#00C48C'
  },
  typography:{
  	fontFamily: 'Muli',
  	h2:{
  		color: '#212121',
  		fontSize: 36,
  		fontWeight: 600,
  		lineHeight: '45px'
  	},
    h3:{
      color: '#212121',
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: -0.5,
      lineHeight: '32px'
    }, 
    h4:{
      color: '#212121',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '30px'
    },  	
    body1:{
      color: '#9b9b9b',
      fontSize: 24,
      lineHeight: '30px'
    },
    body2:{
      color: '#616161',
      fontSize: 18,
      lineHeight: '28px'
    },
    subtitle1:{
      color: '#212121',
      fontSize: 18,
      fontWeight: 'bold'
    }
  }
});

export default MUITheme;