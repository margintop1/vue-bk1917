const path=require("path");

module.exports={
    devServer:{
        "/server":{
            target:"https://m.228.cn",
            changeOrigin:true
        }
    },
    configureWebpack:{
        alias:{
            "@":path.join(__dirname,"./src"),
            "@assets":path.join(__dirname,"./src/assets"),
            "@commit":path.join(__dirname,"./src/commit"),
            "@components":path.join(__dirname,"./src/components"),
            "@pages":path.join(__dirname,"./src/pages"),
            "@router":path.join(__dirname,"./src/router"),
            "@store":path.join(__dirname,"./src/store"),
            "@utils":path.join(__dirname,"./src/utils"),
            "@api":path.join(__dirname,"./src/api"),
        }
    }
}
