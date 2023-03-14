clearSets();
ui();

function ui() {
    var popUp = new Window("dialog"); 
        popUp.text = "Action Set Update"; 
        popUp.orientation = "column"; 
        popUp.alignChildren = ["center","top"]; 
        popUp.spacing = 10; 
        popUp.margins = 16; 

    var layoutDepartment = popUp.add("group", undefined, {name: "layoutDepartment"}); 
        layoutDepartment.orientation = "row"; 
        layoutDepartment.alignChildren = ["left","center"]; 
        layoutDepartment.spacing = 10; 
        layoutDepartment.margins = 0; 

    var departmentButtons = layoutDepartment.add("group", undefined, {name: "departmentButtons"}); 
        departmentButtons.orientation = "column"; 
        departmentButtons.alignChildren = ["center","center"]; 
        departmentButtons.spacing = 10; 
        departmentButtons.margins = 0; 

    var plqButton = departmentButtons.add("button", undefined, undefined, {name: "plqButton"}); 
        plqButton.text = "Plaques"; 
        plqButton.preferredSize.width = 150;
        plqButton.onClick = function() {
            moveFile('PLQ Base.aia');
            moveFile('PLQ Level 2.aia');
            app.loadAction (new File('C:/Layout/Action Sets/PLQ Base.aia'));
            app.loadAction (new File('C:/Layout/Action Sets/PLQ Level 2.aia'));
            popUp.close(); 
        };

    var plateButton = departmentButtons.add("button", undefined, undefined, {name: "plateButton"}); 
        plateButton.text = "Plates"; 
        plateButton.preferredSize.width = 150;
        plateButton.onClick = function() {
            moveFile('Plates 2023.aia');   
            app.loadAction (new File('C:/Layout/Action Sets/Plates 2023.aia'));
            popUp.close();
        };

    var lettersButton = departmentButtons.add("button", undefined, undefined, {name: "lettersButton"}); 
        lettersButton.text = "Letters"; 
        lettersButton.preferredSize.width = 150;
        lettersButton.onClick = function() {
            alert("No new updates at this time.");
            popUp.close();
        };

    var closeButton = departmentButtons.add("button", undefined, undefined, {name: "closeButton"}); 
        closeButton.text = "Close"; 
        closeButton.preferredSize.width = 72;
        closeButton.onClick = function() {
            popUp.close();
        }

    popUp.show();
    };
    
function moveFile(sourceFileName) {
    var sourceFolderPath = '//ad/deployments/Layouts/Action Sets/';
    var sourceFilePath = sourceFolderPath + sourceFileName;
    var targetFolderPath = 'C:/Layout/Action Sets/';
    var targetFilePath = targetFolderPath + sourceFileName;

    var sourceFile = new File(sourceFilePath);
    var targetFile = new File(targetFilePath);

    if (sourceFile.exists) {
        var targetFolder = new Folder(targetFolderPath);
        if (!targetFolder.exists) {
        targetFolder.create();
        }
        sourceFile.copy(targetFile);
        alert('File copied successfully.');
    } else {
        alert('Source file does not exist.');
    }
    }
    
function clearSets() {
    try {app.unloadAction('Plates 2023','');}
        catch(e) {("")};
    try {app.unloadAction('Plates','');}
        catch(e) {("")};
    try {app.unloadAction('PLQ Base','');}
        catch(e) {("")};
    try {app.unloadAction('PLQ Level 2','');}
        catch(e) {("")};
    try {app.unloadAction('PLQ 22 Base','');}
        catch(e) {("")};
    try {app.unloadAction('PLQ 22 Level 2','');}
        catch(e) {("")};
    try {app.unloadAction('Save As and Breakdown','');}
        catch(e) {("")};
    try {app.unloadAction('Fillets and Formatting','');}
        catch(e) {("")};
    try {app.unloadAction('Opening Checks','');}
        catch(e) {("")};
    try {app.unloadAction('Proof Creation','');}
        catch(e) {("")};
    try {app.unloadAction('Stud Placements','');}
        catch(e) {("")};
    try {app.unloadAction('Patterns','');}
        catch(e) {("")};
    try {app.unloadAction('Spacing Guide','');}
        catch(e) {("")};
    try {app.unloadAction('Rigid Stencils','');}
        catch(e){;}
    }
