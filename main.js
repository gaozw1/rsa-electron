const {app, BrowserWindow, Menu} = require('electron');

function createWindows(){
let win = new BrowserWindow({
    width: 800,
    height: 600,

})
    //菜单
    Menu.setApplicationMenu(null);

    win.loadFile("index.html");
}
app.whenReady().then(createWindows);