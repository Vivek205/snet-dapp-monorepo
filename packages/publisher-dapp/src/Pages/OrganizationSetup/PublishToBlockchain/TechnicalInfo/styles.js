export const useStyles = MUITheme => ({	
	technicalInfoContainer:{		
  	padding: '31px 0 0',
		borderTopWidth: 1,
		borderTopStyle: 'solid',
		borderTopColor: MUITheme.palette.border.grey,
		margin: '31px 24px 0',
		'& h6':{ 
			padding: '0 !important',
			border: 'none !important',
			fontWeight: 'normal',	
			lineHeight: '23px',
		}
	},
	alertBoxBtnContainer: {
		display: 'flex',
		alignItems: 'center',
		'& p, & button':{ flex: ' 1 1 0' },
		'& p':{ minWidth: 358 },
		'& button': { 
			height: '100%',
			marginLeft: 29,
			[MUITheme.breakpoints.down('sm')]:{ marginLeft: 0 },
		},
		[MUITheme.breakpoints.down('sm')]: { 
			flexDirection: 'column',
			alignItems: 'flex-start'
		},
	}
})