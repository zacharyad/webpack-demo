module.exports = {
    mode: 'development',
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
}

// we want to know where to start reading files from  - > entry point -> entry
//  where to we outpit the final bundle of files