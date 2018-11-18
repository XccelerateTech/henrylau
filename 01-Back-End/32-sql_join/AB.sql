-- A
select citrus.name, citrus.color, stock.quantity from stock inner join citrus on citrus.id = stock.id and citrus.color='orange';

-- B
select * from stock inner join citrus on citrus.id = stock.citrus_id;

-- C
select 
    stock.id,
    stock.quantity,
    stock.price,
    citrus.name,
    citrus.color,
    citrus.taste
into 
    citrus_stock 
from stock inner join citrus on citrus.id = stock.citrus_id;