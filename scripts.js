function RunScript(scriptName) {
  eval("Script_" + scriptName + "();");
}

function Script_InitializeDB() {
  message("Init");
// BaseObjectType
  var obj = Create("BaseObject");
  var Id = obj.field("Id");
  message(Id);
}
