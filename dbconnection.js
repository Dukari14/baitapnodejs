const mysql = require('mysql2');

// Tạo đường dẫn đến database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BanHang'
});

connection.connect((err) => {
  if (err) {
    console.error('Lỗi kết nối cơ sở dữ liệu: ', err);
    return;
  }
  console.log('Đã kết nối thành công với MariaDB trên Codespace!');
});

module.exports = connection;