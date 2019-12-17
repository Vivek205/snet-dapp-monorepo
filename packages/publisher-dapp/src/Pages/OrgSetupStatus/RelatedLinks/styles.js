export const useStyles = MUITheme => ({
	relatedLinksContainer:{
		display: 'flex',
		flexDirection: 'column',
		'& a':{ 
			marginBottom: 10,
			display: 'block',
			'&:last-of-type':{ marginBottom: 0 }
		}
	},
	iconTitleContainer:{
		marginBottom: 15,
		display: 'flex',
		'& svg':{ color: MUITheme.palette.text.primary },
		'& p':{
			paddingLeft: 3,
			marginLeft: 8,
			color: MUITheme.palette.text.primary,
			fontSize: 16,
			fontWeight: 600,
		}
	}
});
