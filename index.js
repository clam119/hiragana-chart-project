var numberOfKanaButtons = document.querySelectorAll(".kana").length;
for (var i = 0; i < numberOfKanaButtons; i++) {

    document.querySelectorAll(".kana")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "あ":
                var aKana = new Audio('sounds/a.mp3');
                aKana.play();
                break;

            case "い":
                var iKana = new Audio('sounds/i.mp3');
                iKana.play();
                break;
            
            case "う":
                 var uKana = new Audio('sounds/u.mp3');
                 uKana.play();
                 break;

            case "え":
                var eKana = new Audio('sounds/e.mp3');
                eKana.play();
                break;
            
            case "お":
                var oKana = new Audio('sounds/o.mp3');
                oKana.play();
                break;
        
            default:
                break;
        }





    });

};