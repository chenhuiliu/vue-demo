let setting;

if (process.env.NODE_ENV == 'production') {
  setting = {
    "API_PREFIX" : "",
    "API_HOST" : "",
  }
} else {    // 本地&开发环境
  setting = {
    "API_PREFIX" : "",
    "API_HOST" : "",
  }
}
export default setting