

function sayHello(){
    var name = document.getElementById("name").value;
    var mensaje = "Hello My "+ name +"!!!!";

    document.getElementById("content").textContent = mensaje;
    document.getElementById("content2").innerHTML = "<h2> "+mensaje+"</h2>";

    if(name === "Alex"){
        var title = document.querySelector("#title").textContent;
        title += " & lovin it!";

        document.querySelector("h1").textContent = title;
    }

    document.querySelector("button").addEventListener("click",sayHello);

}