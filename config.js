// Konfigurasi API untuk Website Desa Slendro
// Ganti URL ini dengan URL json-server kamu setelah di-deploy
// Contoh: https://website-desa-api.onrender.com

const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000'
    : 'https://GANTI-DENGAN-URL-API-KAMU.onrender.com';

window.API_URL = API_URL;
