module.exports = {
    ci: {
        collect: {
            startServerCommand: "npm run build && npm run preview",
            url: ["http://localhost:4173"],
        },
        upload: {
            target: "temporary-public-storage",
        },
    },
};
