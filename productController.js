const db = require('./dbconnection');

// 1. CREATE: Thêm mới một sản phẩm
function createProduct(prod_id, prod_name, prod_price, prod_quantity, pi_id, cate_id, callback) {
  const query = `
    INSERT INTO PRODUCTS (prod_id, prod_name, prod_price, prod_quantity, prod_created_at, pi_id, cate_id) 
    VALUES (?, ?, ?, ?, NOW(), ?, ?)
  `;
  const values = [prod_id, prod_name, prod_price, prod_quantity, pi_id, cate_id];
  
  db.query(query, values, callback);
}

// 2. READ: Lấy danh sách toàn bộ sản phẩm
function getAllProducts(callback) {
  const query = 'SELECT * FROM PRODUCTS';
  db.query(query, callback);
}

// (Tùy chọn bổ sung) READ: Lấy chi tiết 1 sản phẩm theo ID
function getProductById(prod_id, callback) {
  const query = 'SELECT * FROM PRODUCTS WHERE prod_id = ?';
  db.query(query, [prod_id], callback);
}

// 3. UPDATE: Cập nhật thông tin sản phẩm theo ID
function updateProduct(prod_id, prod_name, prod_price, prod_quantity, callback) {
  const query = `
    UPDATE PRODUCTS 
    SET prod_name = ?, prod_price = ?, prod_quantity = ? 
    WHERE prod_id = ?
  `;
  const values = [prod_name, prod_price, prod_quantity, prod_id];
  
  db.query(query, values, callback);
}

// 4. DELETE: Xóa sản phẩm theo ID
function deleteProduct(prod_id, callback) {
  const query = 'DELETE FROM PRODUCTS WHERE prod_id = ?';
  db.query(query, [prod_id], callback);
}

// Xuất các hàm ra để có thể gọi ở các file khác
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};