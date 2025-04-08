const express = require("express");
const path = require("path");
const app = express();

// Serve static files first
app.use(
  express.static(path.join(__dirname, "build"), {
    dotfiles: "allow", // Needed for .env files
  })
);

// Handle client routing AFTER static files
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
