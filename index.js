import express from "express";
import serve_api from "./server/serveAPI.js"
import serve_frontend from './server/serveFrontend.js'

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

serve_api(app)
serve_frontend(app, '*')