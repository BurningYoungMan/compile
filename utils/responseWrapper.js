module.exports = function responseWrapper({ code = 0, message = "成功", data }) {
    return {
        code,
        message,
        data,
    }
}