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

function BaseObject(e = null) {
  if(e == null) {
    this = Create("BaseObject");
  }
}

function ObjectType(e = null) {
  if(e == null) {
    BaseObject.call(this, null);
  }
	//this.id = e.id;
	//this.Name = e.field("Name");
	
	//this.Show = function() {
	//	message("id:\n" + this.id + "\nName:" + this.Name);
	//}
}
