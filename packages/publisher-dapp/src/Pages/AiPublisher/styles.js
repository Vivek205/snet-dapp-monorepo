export const useStyles = MUITheme => ({
	AiPublisherMainContainer:{ paddingTop: 26  },
	descriptionContainer:{ 
		'& p':{
			color: MUITheme.palette.text.darkGrey,
			fontSize: 22
		}
	},
	descriptionTitle: { 
		fontWeight: 'bold',
		lineHeight: '28px'
	},
	description:{ 
		margin: '8px 0 20px',
		fontWeight: 100,
		lineHeight: '28px'
	}
})