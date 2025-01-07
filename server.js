const Hapi = require('@hapi/hapi');

const init = async () => {
    //methode hapi.server() menerima satu parameter namanya ServerOptions yang merupakan konfigurasi yang bisa menetapkan properti port dan host
    const server = Hapi.server({
        port: 5000,
        host:'localhost',
    });
    //menjalankannya secara asynchronous dalam func async dan memenaggil server.start() menggunakan await
    await server.start();
    console.log(`Servernya lagi jalan di ${server.info.uri}`);
}

init();
