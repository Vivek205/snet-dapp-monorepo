export const useStyles = MUITheme => ({
	statusBannerContainer:{
		padding: '38px 14px',
		margin: '40px 0',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#F1F1F1',
		borderRadius: 4,
		display: 'flex',
		backgroundColor: MUITheme.palette.text.secondary
	},
	statusBannerContent:{
		'& p':{
			margin: '24px 0',
			color: MUITheme.palette.text.primary,
			fontSize: 14,
			lineHeight: '21px'
		},
		'& button':{
			'&:first-of-type':{ marginRight: 40 }
		}
	},
})