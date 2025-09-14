CREATE TABLE `products` (
	`id` varchar(36) NOT NULL,
	`nome` text NOT NULL,
	`descricao` text,
	`preco` int NOT NULL,
	`url_imagem` text NOT NULL,
	`quantidade_em_estoque` int NOT NULL,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
