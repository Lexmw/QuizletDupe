const app = require('./server');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`server is listening on http://localhost:${PORT}`));