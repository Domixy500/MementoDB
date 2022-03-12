function Reference(e) {
	
}

function ObjectType(e) {
	this.id = e.id;
	this.Name = e.field("Name");
	
	this.Show = function() {
		message("id:\n" + this.id + "\nName:" + this.Name);
	}
}
