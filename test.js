function Create(typeName) {
  var lib = libByName(typeName);
  var obj = new Object();
  obj = lib.create(obj);
  return obj;
}

function Reference(e) {
	this.DisplayName = e.field("DisplayName");
	this.Type = new ObjectType(e.field("Type"));
	
	this.Show = function() {
		message("id:\n" + this.id + "\nDisplayName:" + this.DisplayName + "\nType:" + this.Type.Name);
	}
}

function BaseObject(e) {
  if(e === undefined) {
    this.entry = Create("BaseObject");
  }
}
BaseObject.prototype.Id = function() {
  var result = this.entry.field("Id");
message(result);
  return result;
  //return "test";
}

function ObjectType(e) {
  if(e == null) {
    BaseObject.call(this, null);
  }
	//this.id = e.id;
	//this.Name = e.field("Name");
	
	//this.Show = function() {
	//	message("id:\n" + this.id + "\nName:" + this.Name);
	//}
}
