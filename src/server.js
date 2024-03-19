// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HTTP
//   - Método HTTP
//   - URL


// GET, POST, PUT, PATCH, DELETE
// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end
// GET /users => Buscando usuários no banc-end
// POST /users => Criar um usuário no back-end

import http from 'node:http';
 // Importa o módulo HTTP do Node.js para criar um servidor HTTP

const users = []; // Declara um array vazio para armazenar usuários

const server = http.createServer((req, res) => { // Cria um servidor HTTP
    const {method, url} = req; // Extrai os campos 'method' e 'url' da requisição HTTP

    // Verifica se a requisição é um método GET para a rota '/users'
    if (method === 'GET' && url === '/users') {
        res.setHeader('Content-type', 'application/json'); // Define o cabeçalho da resposta para JSON
        return res.end(JSON.stringify(users)); // Retorna a lista de usuários em formato JSON
    }

    // Verifica se a requisição é um método POST para a rota '/users'
    if (method === 'POST' && url === '/users') {
        // Adiciona um novo usuário ao array 'users'
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@gmail.com'
        });

        return res.writeHead(201).end(); // Retorna um status 201 (Created) indicando sucesso
    }

    return res.writeHead(404).end('NOT FOUND'); // Retorna um status 404 (Not Found) se a rota não foi encontrada
});

server.listen(3333); // Faz o servidor escutar n
