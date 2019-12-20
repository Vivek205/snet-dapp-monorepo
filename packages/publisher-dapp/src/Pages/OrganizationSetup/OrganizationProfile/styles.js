export const useStyles = MUITheme => ({
	box:{
		width: 845,
		margin: '48px auto 0',
		borderRadius: 4,
		backgroundColor: MUITheme.palette.background.white,
		boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)',
		'& h5':{ 
			paddingLeft: 22,
			borderBottomWidth: 1,
			borderBottomStyle: 'solid',
			borderBottomColor: MUITheme.palette.border.primary
		}
	}
});