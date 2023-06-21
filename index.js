// index.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const targetUrl = 'https://api.openai.com/v1/chat/completion'; // 目标 URL

  try {
    const response = await fetch(targetUrl, {
      method: req.method, // 使用与用户发送请求相同的方法（GET、POST、等）
      headers: req.headers, // 使用与用户发送请求相同的请求头
      body: req.body, // 使用与用户发送请求相同的请求体（如果有）
    });

    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
