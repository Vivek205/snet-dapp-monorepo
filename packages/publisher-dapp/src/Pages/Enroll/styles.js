export const useStyles = MUITheme => ({
	enrollMainContainer:{
		padding: '0 11%',
		'& > div':{
			padding: '32px 0',
			borderTopWidth: 1,
			borderTopColor: MUITheme.palette.text.lightGray,
			borderTopStyle: 'solid',
			'&:last-of-type, &:first-of-type': { borderTop: 'none' },
			'& > p':{
				'&:first-of-type': { marginBottom: 15 },				
			},
			'& a':{ 
				color: MUITheme.palette.primary.main,
				textDecoration: 'none',
				fontWeight: 600
			}
		},
		'& h3':{ marginBottom: 12 },
		[MUITheme.breakpoints.down('sm')]: { padding: '0 35px' },
	},
	topSectionContainer:{ textAlign: 'center' },
	identityProofContainer: {
		'& span':{
			color: MUITheme.palette.text.darkGray,
			fontSize: 18,
			fontWeight: 'bold'
		}
	},
	btnContainer:{ textAlign: 'center' }
})