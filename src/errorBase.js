function customError (msg,status){
    const e = new Error(msg);
    e.status=status;
    Error.captureStackTrace(e,customError);
    return e;
}

const err = new customError('Hi',400);
throw err;