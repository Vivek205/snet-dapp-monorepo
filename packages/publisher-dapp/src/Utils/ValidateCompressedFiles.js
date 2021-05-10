export const validateCompressedFiles = (regexPattern, entry) => {
  const isExpectedFile = Object.values(entry.files).some(file => {
    return file.name.match(regexPattern);
  });

  return isExpectedFile;
};
