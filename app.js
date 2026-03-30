const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  // 👉 xử lý logo
  if (req.url === "/logo.png") {
    const filePath = path.join(__dirname, "public", "Logo_VLU_2022.png");

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("Image not found");
      }

      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
    });
    return;
  }

  // 👉 HTML
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Docker Project</title>

    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #ff7e5f, #feb47b);
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .card {
        background: white;
        padding: 40px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        text-align: center;
        width: 550px;
      }

      .header {
        text-align: center;
        margin-bottom: 10px;
      }

      .logo {
        width: 140px;
        margin-bottom: 15px;
      }

      h1 {
        color: #e53935;
        font-size: 36px;
        margin: 0;
      }

      h3 {
        color: gray;
        margin-bottom: 20px;
      }

      hr {
        margin: 20px 0;
      }

      .member {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 12px;
        margin-top: 12px;
      }

      .member h2 {
        margin: 5px 0;
      }

    </style>
  </head>

  <body>

    <div class="container">
      <div class="card">

        <div class="header">
          <img src="/logo.png" class="logo" />
          <h1>Welcome to Văn Lang University</h1>
        </div>

        <h3>Lớp: 252_71ITDS30103_0102</h3>

        <hr/>

        <div class="member">
          <h2>👨‍💻 Toàn Phúc</h2>
          <p>MSSV: 2474802015696</p>
        </div>

        <div class="member">
          <h2>👨‍💻 Hữu Trí</h2>
          <p>MSSV: 2474802010398</p>
        </div>

      </div>
    </div>

  </body>
  </html>
  `);
});

// ✅ CHẠY SERVER (QUAN TRỌNG CHO RENDER)
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});