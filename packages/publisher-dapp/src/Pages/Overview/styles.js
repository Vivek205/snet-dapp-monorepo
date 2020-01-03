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
				fontSize: 18,
				lineHeight: '24px'
			}
		},
		'& .MuiListItemIcon-root':{ minWidth: 'auto' },
		'& button, & a':{ marginTop: 32 },
		'& img':{ width: '100%' }
	},	
	checkCircleIcon:{
		width: 20,
		marginRight: 16,
		color: MUITheme.palette.success
	},
	features: { 
		padding: '40px 60px !important',
		display: 'flex',
		background: MUITheme.palette.background.white,
		[MUITheme.breakpoints.down('sm')]: { 
			flexDirection: 'column',
			padding: '40px 20px !important'
		},
	},
	featuresContent:{
		marginRight: 24,
		[MUITheme.breakpoints.down('sm')]: { 
			marginTop: 25,
			marginRight: 0
		},
	},
	programMemDetails:{
		padding: '40px 60px !important',
		background: MUITheme.palette.background.mainContent,
		'& > div':{
			width: 845,
			margin: '0 auto',
			[MUITheme.breakpoints.down('sm')]: { width: 'auto' },
			'& h2':{ textAlign: 'center'} 
		},
		'& ul':{ 
			columnCount: 2,
			[MUITheme.breakpoints.down('sm')]: { columnCount: 1 },
			'& > div':{ padding: 0 }
		},
		[MUITheme.breakpoints.down('sm')]: { padding: '40px 20px !important' },
	},
	btnContainer: { textAlign: 'center' }
})	
