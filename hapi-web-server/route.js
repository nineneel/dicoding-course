const route = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Homepage";
        },
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "Halaman tidak dapat diakses denga method tersebut";
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About page";
        },
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "Halaman tidak dapat diakses dengan method tersebut";
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "Halaman tidak diteuman";
        },
    },
    {
        method: "GET",
        path: "/hello/{name?}",
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if (lang == "id") {
                return `Hai mas, ${name}`;
            }

            return `Hello ${name}`;
        },
    },
];

module.exports = route;
