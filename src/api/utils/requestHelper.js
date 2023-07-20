export const handleErrorResponse = (error) => {
    let errorMessage = 'An error occurred';
    if (error.response) {
      errorMessage = error.response.data.message || error.response.statusText;
    } else if (error.message) {
      errorMessage = error.message;
    }
    return errorMessage;
  };