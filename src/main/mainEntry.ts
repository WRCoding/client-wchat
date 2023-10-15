import { app, BrowserWindow } from "electron";
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
    mainWindow.webContents.openDevTools({ mode: "undocked" });
    mainWindow.loadURL(process.argv[2]);
});