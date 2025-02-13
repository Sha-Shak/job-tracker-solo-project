const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const dotenv = require('dotenv');
const { mongoose, uri } = require('./db');
const PORT = 8080;

const corsConfig = {
  origin: "https://job-tracker-pi.vercel.app",
  credentials: true,
  exposedHeaders: ["Authorization"],
};

dotenv.config();
app.use(cors(corsConfig));
// app.use(cors());
app.use(express.json());
app.use(router);

// handling if routes not found 
app.get('*', (req, res) => {
    res.status(404);
    res.send('Server not found');
});

//return typeof res.headersSent !== 'boolean'
// TypeError: Cannot read property 'headersSent' of undefined
//app.use(...) returns a fn, that the async fn will init, so what I did was adding a semicolon before the async fn( at the end of app.get) so the code worked

(async function bootstrap() {
    try {
        await mongoose.connect(uri)
        console.log('Database Connected');
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        })
    }
    catch (error) {
        console.log(error);
    }
})();


// server needs to export for testing
// module.exports = server;