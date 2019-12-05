export const useStyles = MUITheme => ({
	overiewMainContainer:{
		'& h2':{ marginBottom: 52 },
		'& ul':{
			padding: 0,
			marginTop: 32
		},
		'& li':{ 
			padding: 0,
			marginBottom: 16,
			alignItems: 'flex-start',
			'&:last-of-type':{ marginBottom: 0 }
		},
		'& .MuiListItemText-root':{ 
			margin: 0,
			'& span':{ 
				color: '#666',
				lineHeight: '24px'
			}
		},
		'& .MuiListItemIcon-root':{ minWidth: 'auto' },
		'& button':{ marginTop: 32 }
	},
	codeToCustomer: { 
		padding: '40px 60px !important',
		display: 'flex',
		background: MUITheme.palette.background.mainContent,
	},
	codeToCustomerContent: { marginRight: 24 },
	checkCircleIcon:{
		width: 20,
		marginRight: 16,
		color: MUITheme.palette.checkCircle
	},
	features: { 
		padding: '40px 60px !important',
		display: 'flex',
		background: MUITheme.palette.background.white,
	},
	programMemDetails:{
		padding: '40px 60px !important',
		background: MUITheme.palette.background.mainContent,
		'& > div':{
			width: 845,
			margin: '0 auto',
			'& h2':{ textAlign: 'center'} 
		},
		'& ul':{ 
			columnCount: 2,
			'& > div':{ padding: 0 }
		}
	},
	btnContainer: { textAlign: 'center' }
})	