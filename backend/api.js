function api(app){

    app.get("/api", async (req, res) => {
        res.json({ message: "Hello from server!" });
    });

}

export default api;