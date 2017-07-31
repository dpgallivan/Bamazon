create database bamazon2_db;
use bamazon2_db;
create table products(
	iditem int auto_increment not null,
    product_name varchar (11) not null, 
    department_name varchar (11) not null,
    price int (11) not null,
    stock_quantity int (11) not null,
    primary key (id)
);
insert into products(product_name, department_name, price, stock_quantity)
values ('OverWatch", "Video Games', 60, 100),
		('Sprite', 'Beverage', 3, 90),
        ('Otter Case', 'Accessories', 40, 80),
        ('Pokemon', 'Video Game', 45, 70),
        ('Coca-Cola', 'Beverage', 3, 60),
        ('Ray Ban Sunglasses', 'Accessories', 85, 50),
        ('Blue Moon Six Pack', 'Beer', 16, 40), 
        ('Sam Adams Six Pack', 'Beer', 15, 30),
        ('Soccer Ball', 'Sports', 10, 20),
        ('Basketball', 'Sports', 13, 10);
select * from bamazon2_db.products;

