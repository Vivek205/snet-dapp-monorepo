export const useStyles =  (MUITheme) => ({
	entityContainer:{ marginTop: 44 },
	box:{
		borderRadius: 4,
		marginBottom: 27,
		backgroundColor: MUITheme.palette.background.white,
		boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)',
		'& h5':{
			padding: '0 23px',
			borderBottomWidth: 1,
			borderBottomStyle: 'solid',
			borderBottomColor: MUITheme.palette.border.main,
		}
	},
	entityDescription:{
		padding: '0 23px',
		margin: '7px 0 18px',
		color: MUITheme.palette.text.primary,
		fontSize: 16,
		lineHeight: '24px'
	},
	signInBtns:{ marginTop: 15 },
	signInContent: { 
		padding: '7px 30px',
		display: 'flex' 
	},
	signInMedia: { textAlign: 'center' },
	signInRightContent:{
		'& p':{
			fontSize: 14,
			lineHeight: '21px'
		}
	},
	signInSubtitle:{ 
		marginBottom: 25,
		color: MUITheme.palette.text.primary,
		fontWeight: 600
	},
	checkboxContainer:{
		padding: '32px 58px',
		'& span':{ 
			color: MUITheme.palette.text.primary,
			fontSize: 14,
			letterSpacing: 0.25,
			lineHeight: '20px',
		}
	},
	btnContainer:{
		display: 'flex',
		justifyContent: 'center'
	}
})