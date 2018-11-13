-- A
select citrus.name, citrus.color, stock.quantity from stock inner join citrus on citrus.id = stock.id and citrus.color='orange';

-- B
select * from stock full outer join citrus on citrus.id = stock.id;