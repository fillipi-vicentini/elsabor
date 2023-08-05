# Banco de dados relacional

## QUANDO USAR RELACIONAL
## Numa ecommerce temos por exemplo 3 entidades
 - Usuario
 - Produto
 - Carrinho
 - Compra

 - usuario
   - id = AUTOINCREMENT ex: 1
   - nome = VARCHAR(250)
   - email VARCHAR(250)
   - documento  VARCHAR(11)

 - produto
   - id = AUTOINCREMENT ex: 1
   - nome = VARCHAR(250)
   - preco = double
   - descricao = VARCHAR(250)
 
 - carrinho 
  - id = AUTOINCREMENT ex: 1
  - idDoUsuario = usuario.id
  - idDoProduto = produto.id

  ## Não relacional

  - usuario  {
    "id": "asasass",
    "nome":"felipe",
    "email": "filipi@gmail.com",
    "carrinho": 
  }

  

