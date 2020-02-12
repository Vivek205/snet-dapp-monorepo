export const initializeAPIOptions = (token, body, queryStringParameters, additionalHeaders) => {
  const options = { headers: { Authorization: token, ...additionalHeaders } };
  if (body) {
    options.body = body;
  }
  if (queryStringParameters) {
    options.queryStringParameters = queryStringParameters;
  }
  return options;
};
