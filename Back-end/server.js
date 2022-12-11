const http = require("http");
const app = require("./app")
// import du module dotenv pour le chargement de la variable d environnement
const dotenv = require("dotenv");
dotenv.config();
const MY_PORT = process.env.PORT

// gestion des erreurs du serveur

const errorHandler = error => {
    if (error.syscall !== 'listen') {
        console.error("erreur systeme")
        throw error;
    }

    const bind = 'port: ' + MY_PORT;
    switch (error.code) {

        case 'EACCES':
            console.error('Error:' + " " + bind + ' autorisation refusée.');
            process.exit(1);
            break;

        case 'EADDRINUSE':

            console.error(bind + ' adresse déjà utilisée.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
    const bind = 'port ' + MY_PORT;
    console.log('Listenning on:' + ' ' + bind)

});

server.listen(MY_PORT);