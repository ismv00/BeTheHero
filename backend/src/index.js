const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota /Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de paramêtros:
   * Query Params: Paramêtros nomeados enviados na rota após "?" (filtros, paginação)
   * Route Params: Paramêtros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL server
    * NoSql: MongoDB, CouchDB, etc
    */





