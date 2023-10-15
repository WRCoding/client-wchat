import {Knex} from "knex";

const fs = require("fs");
const path = require("path");
let dbInstance: Knex;
if (!dbInstance) {
    let folderPath = process.env.APPDATA || (process.platform == "darwin" ? process.env.HOME + "/Library/Preferences" : process.env.HOME + "/.local/share");
    folderPath = path.join(folderPath, 'client-wchat');
    console.log(folderPath)
    let dbIsExist = fs.existsSync(folderPath);
    if (!dbIsExist) {
        fs.mkdirSync(folderPath);
    }
    let filePath = path.join(folderPath, 'db.db')
    fs.access(filePath, (err) => {
        if (err) {
            console.log('文件不存在,创建文件')
            fs.writeFile(filePath, '', (err) => {
                if (err) {
                    console.error('创建文件时发生错误：', err);
                } else {
                    console.log('空白文件创建成功！');
                }
            })
        }else{
            console.log('文件存在不需要创建')
        }
    })
    console.log(filePath)
    dbInstance = require('knex')({
        client: "sqlite3",
        connection: {filename: filePath},
        useNullAsDefault: true,
    });
}
export let db = dbInstance;