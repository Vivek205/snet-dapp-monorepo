export const useStyles = MUITheme => ({
	getInTouch:{
		maxWidth: 1175,
		padding: '40px 60px !important',
		margin: '0 auto',
		textAlign: 'center',
		'& p':{ textAlign: 'initial' },
		'& form':{ 
			marginTop: 32,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
		'& input':{ 
			width: 411,
			display: 'block',
		},
		'& button':{ marginTop: '19px !important' }
	}
})	