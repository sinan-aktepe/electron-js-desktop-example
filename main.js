const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;



app.on('ready', () => {

    // EKRAN BOYUTLARINI GÖSTER
    var sc = electron.screen;
    var mainScreen = sc.getPrimaryDisplay();
    var allScreens = sc.getAllDisplays();
    console.log(mainScreen, allScreens);

    // PENCERENİN ÖZELLİKLERİ
    mainWindow = new BrowserWindow({width: 1024,height: 768,backgroundColor: '#687295', center: true,'min-height': 700,'min-width': 1200,});

    mainWindow.loadURL("https://demos.creative-tim.com/paper-dashboard/examples/dashboard.html");

    // CUSTOM MENÜYÜ DEFAULT YAPMA
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

// CUSTOM MENU OLUŞTURMA
const mainMenuTemplate = [
    {
        label: "Dosya",
        submenu: [
            {
                label: "Çıkış",
                accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
                role: "quit"
            }
        ]
    }
]
