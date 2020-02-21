const config = {
    presets: [
        ["@babel/preset-env", {
            "targets": {
                "browsers": ["> 0.25%", "ie >= 11"]
            }
        }],
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties"
    ]
};

module.exports = config;
