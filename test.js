function Reference(e) {
	this.DisplayName = e.field("DisplayName");
	this.Type = new ObjectType(e.field("Type"));
	
	this.Show = function() {
		message("id:\n" + this.id + "\nDisplayName:" + this.DisplayName + "\nType:" + this.Type.Name);
	}
}

function ObjectType(e) {
	this.id = e.id;
	this.Name = e.field("Name");
	
	this.Show = function() {
		message("id:\n" + this.id + "\nName:" + this.Name);
	}
}
