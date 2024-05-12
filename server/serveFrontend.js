import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

function serve_frontend(app, route){
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.use(express.static(path.resolve(__dirname, '../frontend/build')));
    
    app.get(route, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
    });
}

export default serve_frontend;