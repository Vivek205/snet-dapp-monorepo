export const useStyles = MUITheme => ({
	OrgSetupStatusContainer: {
		padding: '40px 0 0',
	},
	description:{
		'& p':{
			marginTop: 8,
			color: MUITheme.palette.text.darkGrey,
			fontSize: 22,
			fontWeight: 200,
			lineHeight: '28px'
		}
	},
	setupStatusDetailsContainer:{
		padding: '38px 14px',
		margin: '40px 0',
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#F1F1F1',
		borderRadius: 4,
		display: 'flex',
		backgroundColor: MUITheme.palette.text.secondary
	},
	setupStatusContent:{
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
	relatedLinksContainer:{
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
