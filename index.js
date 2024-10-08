const express = require('express');
const app = express();

// 用來解析 JSON 格式的請求數據
app.use(express.json());

// 當外部系統發送請求到此 Webhook URL 時，會觸發這個處理器
app.post('/webhook', (req, res) => {
  const data = req.body;
  console.log('收到 Webhook 數據:', data);

  // 根據收到的數據執行相關操作
  if (data.message === '澆水') {
    console.log('收到澆水指令，執行澆水操作...');
    // 這裡可以加入與 ESP32 通信的邏輯
  }

  // 回應 200 OK，表示伺服器成功接收到請求
  res.status(200).send('Webhook 接收成功');
});

// 啟動伺服器，監聽 3000 端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`伺服器運行在端口 ${PORT}`);
});
