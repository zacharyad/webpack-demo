module.exports = {
    // we "need" a mode option
    mode: "development", // production
    // entry point
    entry: "./main.js",

    /// output for out bundled code
    output: {
        path: __dirname,
        filename: "bundle.js"
    }

}