CREATE DATABASE IF NOT EXISTS ecommerce_demo;
USE ecommerce_demo;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  description VARCHAR(255)
);

INSERT INTO products (name, price, image_url, description) VALUES
('Smartphone', 14999.00, 'images/phone.jpg', 'Budget Android smartphone'),
('Laptop', 55999.00, 'images/laptop.jpg', '14 inch slim laptop'),
('Headphones', 1999.00, 'images/headphones.jpg', 'Wireless over-ear headphones'),
('Smart Watch', 2999.00, 'images/watch.jpg', 'Fitness tracking smartwatch');
