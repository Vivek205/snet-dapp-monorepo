export const useStyles = MUITheme => ({
	UserProfilePopUpContainer:{
		width: 300,
    padding: '15px 0',
    borderRadius: 4,
    mrgin: 0,
    position: "absolute",
    top: 10,
    right: 60,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    zIndex: 1,
    '& ul':{
      padding: '0 0 0 5px',
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderTopColor: MUITheme.palette.border.grey,
      marginLeft: 0,
      '& li':{
        paddingTop: 10,
        margin: 0,
        display: 'flex',
        cursor: 'pointer',
        listStyle: 'none'
      }
    }
	}
})