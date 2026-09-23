CREATE DATABASE BanHang;
USE BanHang;

CREATE TABLE CATEGORY (
	cate_id int(10) NOT NULL,
	cate_name varchar(255) NOT NULL,
	cate_variable varchar(255) NOT NULL,
	cate_created_at timestamp NULL DEFAULT NULL,
	cate_parent int(11) NOT NULL DEFAULT 0,
    cate_version INT DEFAULT 1,
	PRIMARY KEY (cate_id)
);

CREATE TABLE PRODUCTIMAGE (
	pi_id int(10) NOT NULL,
	prod_id INT(10) NOT NULL,
	prod_image varchar(255) DEFAULT NULL,
	pi_created_at timestamp NULL DEFAULT NULL,
    pi_version INT DEFAULT 1,
	PRIMARY KEY (pi_id)
);

CREATE TABLE PRODUCTS (
	prod_id INT(10) NOT NULL,
	prod_name VARCHAR(255) NOT NULL,
    prod_price INT(15) NOT NULL DEFAULT 0,
	prod_quantity INT(15) NOT NULL DEFAULT 0,
    prod_created_at timestamp NULL DEFAULT NULL,
    pi_id int(10) NOT NULL,
    cate_id int(10) NOT NULL,
    prod_version INT DEFAULT 1,
	PRIMARY KEY (prod_id),
    FOREIGN KEY (pi_id) REFERENCES PRODUCTIMAGE(pi_id),
    FOREIGN KEY (cate_id) REFERENCES CATEGORY(cate_id)
);

CREATE TABLE USERS (
	user_id int(10) NOT NULL,
	user_name varchar(255) NOT NULL,
	user_email varchar(255) NOT NULL,
	user_phone char(255) DEFAULT NULL,
	user_address varchar(255) DEFAULT NULL,
	user_password varchar(255) NOT NULL,
	user_remember_token varchar(100) DEFAULT NULL,
	user_created_at timestamp NULL DEFAULT NULL,
    user_version INT DEFAULT 1,
	PRIMARY KEY (user_id)
);