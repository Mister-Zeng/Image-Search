import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID gUQxNlvDYpokR09kwcGSrcE5DB2eYT7knzjGTzBgDrU',
  },
});
