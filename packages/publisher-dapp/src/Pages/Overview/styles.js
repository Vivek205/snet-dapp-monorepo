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
			display: 'flex',
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
		'& .MuiListItemIcon-root':{ minWidth: 'auto' }
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
			display: 'flex',
			'& > div':{ padding: 0 }
		}
	},
	getInTouch:{
		maxWidth: 1175,
		padding: '40px 60px !important',
		margin: '0 auto',
		textAlign: 'center',
		'& p':{ textAlign: 'initial' },
		'& form':{ 
			margin: '32px 0 19px', 
		},
		'& input':{ width: 411 }
	}
})	