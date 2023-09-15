const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const success = (request, response) => {
  const responseJSON = {
    message: 'This is a successful response',
  };

  return respondJSON(request, response, 200, responseJSON);
};

const badRequest = (request, response, params) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  if(!params.valid || params.valid !== "true"){
    responseJSON.message = "Missing true value for valid query param";
    responseJSON.id = "badRequest";
    return respondJSON(request, response, 400, responseJSON);
  }
  return respondJSON(request, response, 200, responseJSON);
};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  return respondJSON(request, response, 404, responseJSON);
};

module.exports = {
  success,
  badRequest,
  notFound,
};
