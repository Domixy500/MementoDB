function RunScript(scriptName) {
  eval("Script_" + scriptName + "();");
}

function Script_InitializeDB() {
  message("Init");
}
