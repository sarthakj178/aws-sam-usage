exports.ping = async event => {
    const response = {};
    response.statusCode = 200;
    response.body = JSON.stringify({ success: true });
    return response;
};

exports.pingWithEnvVariable = async event => {
    const response = {};
    response.statusCode = 200;
    const env = process.env.PING_ENV_KEY;
    response.body = JSON.stringify({ env });
    return response;
};
