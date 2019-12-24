export const useStyles = MUITheme => ({
	orgImgContainer:{ padding: '0 54px' },
	title:{
		marginTop: 16,
		color: MUITheme.palette.text.darkGrey,
		fontSize: 18,
		lineHeight: '23px'
	},
	profileImgContainer:{
		display: 'flex'
	},
	previewText:{
		color: MUITheme.palette.text.lightGrey,
		fontSize: 14,
		letterSpacing: 0.25,
		lineHeight: '20px'
	},
	previewLargeImg:{
		'& p':{
			marginBottom: 13,
			color: MUITheme.palette.text.darkGrey,
			fontSize: 16
		}
	},
	previewImg:{
		width: 250,
		margin: '0 auto',
		display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
	},
	largePreviewImg:{ 
		width: 72, 
		height: 72 
	},
	orgProfileImg:{
		width: 334,
		'& > div': { 
			minWidth: '100% !important',
			width: '100% !important'
		}
	},
	previewContainer:{ paddingLeft: 40 }
})