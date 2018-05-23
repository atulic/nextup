const express = require('express');
require("./services/passport.js");

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

require("./routes/authRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));