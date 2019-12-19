export const useStyles = MUITheme => ({
	basicTextFieldGrid:{
    '& label':{
    	color: MUITheme.palette.text.darkGrey,
    	fontSize: 12,
    	letterSpacing: 0.4,
    	'&.MuiFormLabel-root.Mui-focused':{ color: MUITheme.palette.text.darkGrey }
    },
    [MUITheme.breakpoints.down('xs')]: { width: '100%' }
   },
   description:{ 
   	paddingLeft: 30,
   	marginTop: 16,
   	'& p':{
   		color: MUITheme.palette.text.lightGrey,
   		fontSize: 14,
   		letterSpacing: 0.25,
   		lineHeight: '20px'
   	},
    [MUITheme.breakpoints.down('sm')]: { 
      paddingLeft: 0,
      marginTop: 0, 
      marginBottom: 10     
    },
   }
})