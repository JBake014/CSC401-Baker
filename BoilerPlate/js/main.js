
	//Javascript Styles used most often (pick one&stickwith)
	//Don't use dashes for names.
	var callOut; //camelCase
	var call_out; //underscore
	
	var thisisamodalalert; //Bad function name!
	var this_is_a_modal_alert; //Better
	
	//var foo-bar; //dashes don't do it. This is why:
	//(foo-bar) - otherVar{}
	
	//Perfered way & easier to read when defining variables (indent)
	var callOut,
		varNum2,
		varNum3;
	
	
	//Give variable callOut; meaning:
	//one space is javascript means to assign:
	callOut = "Hello World";
	//alert(callOut);
	console.log(callOut);
	
	//function is a series of events that you would want to re-use throughout the site
	var firstName;
	firstName = function(name){
		//example var name = "Jessica";
		console.log("How are you today, " + name + "?");
	};
	
	//DRY - don't repeat yourself Make Variables as adaptable as possible
	firstName("Bob");
	firstName("Ana");
	firstName("Tim");
	
	var lastName;
	lastName = function(last){
		console.log(last);
	}
	
	lastName("Ogilvy");
	lastName("Baker");
	lastName("Marrow");
	
	