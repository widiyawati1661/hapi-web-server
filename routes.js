server.routes = [
    {
    //req handler, Handler pada Hapi dipisahkan berdasarkan route yang ada  Setiap spesifikasi route memiliki handler-nya masing-masing
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Homepage';
    },
},
{
    method: '*',
    path: '/',
    handler: (request, h) => {
        return 'Halaman tidak bisa diakses pake method ini';
    },
},
    //note: cara menetapkan lebih dari satu route configuration dalam method server.route()? Mudah! Sebenarnya, server.route() selain dapat menerima route configuration, ia juga dapat menerima array dari route configuration
    {
        //req handler, Handler pada Hapi dipisahkan berdasarkan route yang ada  Setiap spesifikasi route memiliki handler-nya masing-masing
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
}, 
{
    method: '*',
    path: '/about',
    handler: (request, h) => {
        return 'Halaman tidak bisa diakses pake method ini';
    },
},
{
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
        return 'Halaman tidak ditemukan';
    },
},
];

module.exports = routes;