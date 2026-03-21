const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align:center; font-family:sans-serif;">
      <h1>🚀 Welcome to Docker Project</h1>
      <h2>🎓 Văn Lang University</h2>
      <h3>Lớp: 252_71ITDS30103_0102</h3>
      <hr/>

      <h2>👨‍💻 Toàn Phúc</h2>
      <p>MSSV: 2474802015696</p>

      <h2>👨‍💻 Hữu Trí</h2>
      <p>MSSV: 2474802010398</p>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});