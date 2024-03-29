const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3000, () => {
    console.log("Listening at port 3000"); // eslint-disable-line no-console
  });
});
