export const mimeTypeToFileType = mimeType => {
  if (!mimeType) {
    return null;
  }
  const fileType = mimeType.split("/")[1];
  return fileType;
};

export const fileTypeToMimeType = fileType => {
  if (!fileType) {
    return null;
  }
  const mimeType = `image/${fileType}`;
  return mimeType;
};

export const imgSrcInBase64 = (mimeType, data) => {
  if (!mimeType || !data) {
    return null;
  }
  const src = `data:${mimeType};base64,${data}`;
  return src;
};
