const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;



app.on('ready', () => {

    // SHOW WINDOW SIZE
    var sc = electron.screen;
    var mainScreen = sc.getPrimaryDisplay();
    var allScreens = sc.getAllDisplays();
    console.log(mainScreen, allScreens);

    // WINDOW PROPERTIES
    mainWindow = new BrowserWindow({width: 1024,height: 768,backgroundColor: '#687295', center: true,'min-height': 700,'min-width': 1200,});

    mainWindow.loadURL("yourUrl");

    // SET MENU AS DEFAULT
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

// CREATE CUSTOM MENU
const mainMenuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Exit",
                accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
                role: "quit"
            }
        ]
    }
]
