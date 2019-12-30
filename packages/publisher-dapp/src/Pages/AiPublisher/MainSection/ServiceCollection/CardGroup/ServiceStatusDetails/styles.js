export const useStyles = MUITheme => ({
	statusDetails: { 
		padding: '20px 33px',
		display: 'flex',
		backgroundColor: '#f1f1f1'
	},
	property:{ 
		color:`${MUITheme.palette.text.lightGrey} !important`,
		fontSize: '16px !important',
		lineHeight: '20px',
		textTransform: 'uppercase'
	},
	value:{
		paddingLeft: 16,
		color: `${MUITheme.palette.success} !important`,
		fontSize: '18px !important',
		lineHeight: '23px',
		textTransform: 'uppercase'
	},
	priceAndPriceModel:{
		padding: '18px 33px',
		display: 'flex',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: '#979797',
		'& div':{ display: 'flex' },
		'& p':{
			'&:first-of-type':{ textTransform: 'none !important' },
			'&:last-of-type':{
				paddingLeft: 16,
				color: `${MUITheme.palette.text.darkGrey} !important`,
				fontSize: '18px !important',
				lineHeight: '23px',
			},
		},	
	},
	usageActivity:{
		paddingTop: 35,
		display: 'flex',
		flexDirection: 'column'
	},
	usageActivityHeader:{ 
		padding: '0 33px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	usageDurationDetail:{
		'& > span':{
			color: MUITheme.palette.text.lightGrey,
			fontSize: 16
		}
	},
	usageActivityDetails:{
		padding: '43px 33px 57px',
		borderBottomWidth: 1,
		borderBottomStyle: 'solid',
		borderBottomColor: '#979797',
		display: 'flex',
		justifyContent: 'space-between',
		'& div':{
			'& span':{
				display: 'block',
				textAlign: 'right',
				'&:first-of-type':{
					color: MUITheme.palette.text.lightGrey,
					fontSize: 16
				},
				'&:last-of-type':{
					color: MUITheme.palette.text.darkGrey,
					fontSize: 28
				}
			}
		}
	},
	usageActivityActions:{
		padding: '20px 33px',
		display: 'flex',
		justifyContent: 'space-between',
		'& div':{
			'& button':{
				'&:last-of-type':{ marginLeft: 25 }
			}
		}
	}
})
