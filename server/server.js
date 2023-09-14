const app = require('./app');

const port = process.env.APP_PORT || 8080;
app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`);
});
