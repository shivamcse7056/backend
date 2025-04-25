class ApiError extends Error {
  constructor(message= "Something went wrong", statusCode, error= [], statck= "") {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = this.errors;

    if(statements) {
      this.stack = statck;
} else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}