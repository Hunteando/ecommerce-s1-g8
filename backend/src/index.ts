import app from "./app";

(() =>
  app.listen(app.get("port"), async () => {
    console.log("Server is running on port: " + app.get("port"));
  }))();
