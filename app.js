const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // 환경 변수에서 포트 설정

// 홈 라우트
app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
});

// 제품 목록 라우트
app.get('/products', (req, res) => {
  res.json([
    { productId: '101', price: 100 },
    { productId: '102', price: 150 }
  ]);
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// 서버 실행
app.listen(port, () => {
  console.log(`Demo app is up and listening to port: ${port}`);
});