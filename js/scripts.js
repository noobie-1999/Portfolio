window.addEventListener("DOMContentLoaded", function(event){
    var getInfo = function(event){
        var messageObject = {
            "name":document.getElementById("name").value,
            "email":document.getElementById("email").value,
            "contactno": document.getElementById("contactno").value,
            "message": document.getElementById("message").value
        }
        console.log(messageObject);
    }
    
    document.querySelector("#submitbutton").addEventListener("click", getInfo);
});