import axios from 'axios';

const PORT = process.env.PORT;

axios
    .get(`http://localhost:${PORT}/index?pageNumber=1&age=20&age=21`)
    .then((res) => console.log(res.data))
    .catch(() => console.error('Error occurred'));
