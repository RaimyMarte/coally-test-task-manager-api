const clientResponse = ({
  data,
  isSuccess,
  message,
  statusCode,
  title,
} = {}) => ({
  data,
  isSuccess,
  message,
  statusCode,
  title,
});

module.exports = clientResponse;
