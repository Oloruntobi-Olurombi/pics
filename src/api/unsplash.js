import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID C3YWchbaPqaLdmGAS0b3QBSX9Q9wxD_kqUTKM0t-EdU"
  }
});