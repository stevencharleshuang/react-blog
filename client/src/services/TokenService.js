/* TokenService.js pattern based on Jason Seminara's react-skeleton-api
   https://git.generalassemb.ly/wdi-nyc-rover/react-skeleton-api/blob/tokens/src/services/TokenService.js*/

const TokenService = {
  save(token) {
    console.log(token);
    window.localStorage.setItem('authToken', token);
  },
  read() {
    return window.localStorage.getItem('authToken');
  },
  destroy() {
    window.localStorage.removeItem('authToken');
  },
};

export default TokenService;
