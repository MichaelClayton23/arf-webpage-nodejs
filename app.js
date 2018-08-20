const http = require('http');
port = 8080;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
            nombre: 'Hola nombre',
            edad: 33,
            url: req.url
        }
        //res.write('Hola peña');
    res.write(JSON.stringify(salida))
    res.end();
}).listen(port);

console.log('Escuchando en ', port);