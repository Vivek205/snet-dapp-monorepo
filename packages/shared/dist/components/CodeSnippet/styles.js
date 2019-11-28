

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var useStyles = function useStyles(theme) {
  return {
    codeSnippetContainer: {
      boxSizing: "border-box",
      width: "100%",
      borderRadius: 4,
      backgroundColor: "#1F1F1F",
      padding: "0 0 0 10px",
      color: theme.palette.text.white,
      fontFamily: "'Space Mono', monospace;"
    },
    codeSnippet: {
      padding: 10
    }
  };
};

exports.useStyles = useStyles;