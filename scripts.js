function RunScript(scriptName) {
  eval("Script_" + scriptName + "();");
}

function Script_InitializeDB() {
  //message("Init");
// BaseObjectType
  var obj = new BaseObject();
  var Id = obj.entry.field("Id");
  message("id" + Id);
  message("str" + JSON.stringify(obj));
  message("obj.Id" + obj.Id());
}
