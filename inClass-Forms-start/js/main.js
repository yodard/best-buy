$ (document) .ready(function(){
    // alert ("im working");

    var clickButton = function(){
        console.log("boop");
        var btnId = $(this).attr("id");
        console.log(btnId + "has been booped");
    }
    
    var hoverButton = function(){
        console.log("whoosh");
    }

$ (".warranty").click(clickButton).hover(hoverButton);



});