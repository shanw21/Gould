handleResize = () => {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var column1 = document.getElementById("column-1");
    var column5 = document.getElementById("column-5");
    column5.style.height = windowHeight - column1.style.height - 200 + "px";
}
window.addEventListener("load", handleResize);
window.addEventListener("resize",handleResize);

var btn = document.getElementById("btn"); // onclick
btn.onclick = function() {
    //form json
    var json = [];
        var j = {};
        var k = {};
        j.password= document.getElementById("username").value;
        k.password = document.getElementById("password").value;
        json.push(j,k);
    var a = JSON.stringify(json);
    alert(a);//json
}