module.exports = {
    ci: {
        collect: {
            startServerCommand: "npm run build && npm run preview",
            url: ["http://localhost:4173"],
            numberOfRuns: 1,
        },
        upload: {
            target: "filesystem",
            outputDir: "../lighthouse-reports",
            reportFilenamePattern: "index.html",
        },
    },
};
