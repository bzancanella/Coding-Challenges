var name_list = new Array();
// TEST Array name_list = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; 

// Function to iterate through name_list array and display each name
function print_names() {
    let print_list = ""; // declares print_list variable which will contain all of the <li> tags to display the name_list array 
    for (i = 0; i < name_list.length; i++) {  // iterates through each index in the array              
        print_list +=  "<li>" + name_list[i] + "</li>"; // each index in the array is added in a <li> tag to the print_list variable
    }
    document.getElementById("display_list").innerHTML = print_list; // the print_list variable is written into the display_list
    document.getElementById("name_to_add").value = ''; // clears the value in the input form
}

// This function adds the name from the input box to an array 
function add_to_list() {
    let add_name = document.getElementById("name_to_add").value; // takes input box string and converts it to the variable add_name
    if (add_name == "" || add_name.length == 0) { // if the add_name var is blank, function does nothing
        return false;
    }
    name_list.push(add_name); // places the add_name var into the name_list array
    print_names(); // prints all of the names in the index into the display_list element
    // quite_enough();
    if (name_list.length == 9) { // once there are 9 indicies in the array the add_to_list button is disabled
        document.getElementById("add_button").disabled = true;
    }
}

// This function randomizes the location of the names on the list
// and places them in the name_boxes
function randomize_and_place() {
    for (i = name_list.length - 1; i > 0; i--) { // randomizes the index position of each item in the array
        var n = Math.floor(Math.random() * (i + 1)); //excludes new indicies that have already been taken
        [name_list[i], name_list[n]] = [name_list[n], name_list[i]];
    }
    place();
}

// This function places each indexed item of the array in the box corresponding to it's indexed position
function place() {
    for (i = 0; i < name_list.length; i++) {
        document.getElementById('box_' + i).innerHTML = name_list[i];
    }
}
// This function clears the names from the list and the name_boxes
function clear_and_reset() {
    for (i = 0; i < name_list.length; i++) { // iterates through each name_box and clears the content, replacing it with &nbsp; to keep the boxes "inflated"
        document.getElementById('box_' + i).innerHTML = "&nbsp;";
    }
    name_list = []; // sets the array to blank, preparing it for a new set of inputs
    print_list = ""; // clears the print list content
    document.getElementById("display_list").innerHTML = print_list; // displays the empty print_list
    document.getElementById("add_button").disabled = false; // enables the add_button
}