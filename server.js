const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.use('*', (req, res) => {
  res.status(404).send('Path not found');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
