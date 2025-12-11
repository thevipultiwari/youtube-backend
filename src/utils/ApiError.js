class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""   //useful for debugging. optional stack trace string (default: empty string). 
                     // Useful when you want to pass an existing stack (e.g. rethrowing) or hide it in production.
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor) //Error.captureStackTrace is a V8/Node feature — it’s the 
                                                            //recommended way to create meaningful stacks.
        }

    }
}

export {ApiError}