Object.prototype.displayString = function () {
  return getName(this) + " (" + typeof this + "): " + this + "\n";
}
function Create(typeName) {
  var library = libByName(typeName);
  var obj = new Object();
  obj = library.create(obj);
  return obj;
}

function objToString(obj) {
  var str = '';
  switch (typeof obj) {
    case "object":
      str += obj.displayString();
      for (var prop in obj) {
        objToString(obj[prop]);
      }
      break;
    case "function":
      break;
    default:
      str += obj.displayString();
      break;
  }
	log(str);
  //for (var k in object) {
    //if (typeof object[k] == "object") {
     // str += k + '::' + objToString(object[k]) + '\n';
   // }
    //else if (typeof object[k] == "function") {}
    //else {
     // str += k + '::' + object[k] + '\n';
    //}
 // }
  //log(str);
  return str;
}

function BaseObject(e) {
  if(e === undefined) {
    this.entry = Create("BaseObject");
  }
  objToString(this);
  //this.Id = function() {
    //return this.entry.field("Id");
  //}
}
BaseObject.prototype.Id = function() {
  var result = this.entry.field("Id");
message("res" + result);
  return this.entry.field("Id");
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
