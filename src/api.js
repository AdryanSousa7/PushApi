//Importando o axios
import axios from 'axios';

// Criando instancia chamada api
const api = axios.create({

// Local onde a api será puxada
  baseURL: 'https://dragonball-api.com'
});

// Exportando para usar em outro local
export default api;
