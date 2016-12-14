//Defining a listener for our button, specifically, an onclick handler


document.getElementById("add").onclick = function() {
    // create alert to decide if important
    //get input value
    var text = document.getElementById("task").value;
    
    //construct list element
    var li = text + "   ";
    
    //decide where to print at
    var important = confirm("Is this Important?" + "\n'Ok' for yes and 'Cancel' for no");
    var urgent = confirm("Is this Urgent?"  + "\n'Ok' for yes and 'Cancel' for no");
    if (important == true & urgent == true) {
        document.getElementById("list1").append(li);
    }
    if (important == true & urgent != true) {
        document.getElementById("list2").append(li);
    }
    if (important != true & urgent == true) {
        document.getElementById("list3").append(li);
    }
    if (important != true & urgent != true) {
        document.getElementById("list4").append(li);
    }
    //should remove whatever you click on
    //could not get remove function to work at all
    $document.ready()=function() {
    $onclick(li).this().remove();
    }
}


