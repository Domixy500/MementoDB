Object.prototype.displayString = function (varName, indent) {
	for (var prop in this) {
		message(prop + " (" + typeof this[prop] + ")");
		switch (typeof this[prop]) {
			case "object":
				this[prop].displayString(prop);
				break;
			case "function":
				break;
			default:
				displayStr = this + "\n";
				break;
		}
	}
	return "1";
}

function Create(typeName) {
  var library = libByName(typeName);
  var obj = new Object();
  obj = library.create(obj);
  return obj;
}

function BaseObject(e) {
	
  if(e === undefined) {
    this.entry = Create("BaseObject");
  }
  this.IdVal = this.Id();
  
  
  //var str = this.displayString("BaseObject");
  var str = this.entry.displayString("Entry");
  message(str);
  log(str);
}
BaseObject.prototype.Id = function() {
  var result = this.entry.field("Id");
  return this.entry.field("Id");
}

function ObjectType(e) {
  if(e == null) {
    BaseObject.call(this, null);
  }
}
