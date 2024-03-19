import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === 'GET' && url === '/users'){
        return res.end('Listagem de usuario')
    }

    if(method === 'POST' && url ==='/users'){
        users.push({
            id: 1,
            name: 'john Doe',
            email: 'johndoes@gmail.com'
        })

        return res.end('Criação de usuario')
    }

    return res.end("hello word")
})

server.listen(3333)