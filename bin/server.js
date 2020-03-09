const app = require('../app/index');
const expres = require("express");
const ENV = process.env.NODE_ENV;
const port = process.env.PORT || 3000;

if (ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.use((req, res) => {
      res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });
  }

app.listen(port, () => `Server running on port ${port} 🔥`);