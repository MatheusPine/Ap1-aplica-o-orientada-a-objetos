const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;  // Corrigido de resizeTo para res
    res.setHeader('Content-Type', 'text/plain');  // Corrigido "content-Tyoe" para "Content-Type"
    res.end('Oi prof, espero que o trabalho esteja ao seu gosto, uma otima semana a vc e a sua familia.');
});

server.listen(port, hostname, () => {
    console.log("Servidor rodando em http://" + hostname + ":" + port);
});
