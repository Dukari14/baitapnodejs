const productModel = require('./productController');

// Thử nghiệm hàm READ (Lấy danh sách sản phẩm)
productModel.getAllProducts((err, results) => {
  if (err) {
    console.error('Lỗi truy vấn: ', err);
    return;
  }
  console.log('Danh sách sản phẩm hiện tại trong CSDL:', results);
});