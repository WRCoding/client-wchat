import {app, BrowserWindow, ipcMain} from "electron";

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";
let mainWindow: BrowserWindow;
app.whenReady().then(() => {
    let config = {
        titleBarStyle: 'hidden',
        titleBarOverlay: true,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            allowRunningInsecureContent: true,
            contextIsolation: false,
            webviewTag: true,
            spellcheck: false,
            disableHtmlFullscreenWindowResize: true,
        },
    };
    // @ts-ignore
    mainWindow = new BrowserWindow(config);
    mainWindow.webContents.openDevTools({mode: "undocked"});
    mainWindow.loadURL(process.argv[2]);

    ipcMain.on('openWindow', () => {
        let config = {
            // titleBarStyle: 'hidden',
            // titleBarOverlay: true,
            webPreferences: {
                nodeIntegration: true,
                webSecurity: false,
                allowRunningInsecureContent: true,
                contextIsolation: false,
                webviewTag: true,
                spellcheck: false,
                disableHtmlFullscreenWindowResize: true,
            },
        };
        // @ts-ignore
        let childWindow = new BrowserWindow(config);
        childWindow.loadURL('https://github.com/login/oauth/authorize?client_id=6ec3c6a6c321273712c9&redirect_uri=http://127.0.0.1:9777/oauth/callback&scope=user');
        // 监听子窗口关闭事件
        childWindow.webContents.on('did-redirect-navigation', (event, url) => {
            console.log(url)
            let code = new URL(url).searchParams.get('code')
            console.log(code)
            if (code.length > 0) {
                childWindow.close()
                mainWindow.webContents.send('loginSuccessByGitHub', code)
            }
        })
    })

});


