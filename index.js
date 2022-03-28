var numberOfKanaButtons = document.querySelectorAll(".kana").length;
for (var i = 0; i < numberOfKanaButtons; i++) {

    document.querySelectorAll(".kana")[i].addEventListener("click", function () {

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

            case "か":
                var kaKana = new Audio('sounds/ka.mp3');
                kaKana.play();
                break;

            case "き":
                var kiKana = new Audio('sounds/ki.mp3');
                kiKana.play();
                break;

            case "く":
                var kuKana = new Audio('sounds/ku.mp3');
                kuKana.play();
                break;

            case "け":
                var keKana = new Audio('sounds/ke.mp3');
                keKana.play();
                break;

            case "こ":
                var koKana = new Audio('sounds/ko.mp3');
                koKana.play();
                break;

            case "さ":
                var saKana = new Audio('sounds/sa.mp3');
                saKana.play();
                break;

            case "し":
                var shiKana = new Audio('sounds/shi.mp3');
                shiKana.play();
                break;

            case "す":
                var suKana = new Audio('sounds/su.mp3');
                suKana.play();
                break;

            case "せ":
                var seKana = new Audio('sounds/se.mp3');
                seKana.play();
                break;

            case "そ":
                var soKana = new Audio('sounds/so.mp3');
                soKana.play();
                break;

            case "た":
                var taKana = new Audio('sounds/ta.mp3');
                taKana.play();
                break;

            case "ち":
                var chiKana = new Audio('sounds/chi.mp3');
                chiKana.play();
                break;

            case "つ":
                var tsuKana = new Audio('sounds/.mp3');
                tsuKana.play();
                break;

            case "て":
                var teKana = new Audio('sounds/te.mp3');
                teKana.play();
                break;

            case "と":
                var toKana = new Audio('sounds/to.mp3');
                toKana.play();
                break;

            case "な":
                var naKana = new Audio('sounds/na.mp3');
                naKana.play();
                break;

            case "に":
                var niKana = new Audio('sounds/ni.mp3');
                niKana.play();
                break;

            case "ぬ":
                var nuKana = new Audio('sounds/nu.mp3');
                nuKana.play();
                break;

            case "ね":
                var neKana = new Audio('sounds/ne.mp3');
                neKana.play();
                break;

            case "の":
                var noKana = new Audio('sounds/no.mp3');
                noKana.play();
                break;

            case "は":
                var haKana = new Audio('sounds/ha.mp3');
                haKana.play();
                break;

            case "ひ":
                var hiKana = new Audio('sounds/hi.mp3');
                hiKana.play();
                break;

            case "ふ":
                var fuKana = new Audio('sounds/fu.mp3');
                fuKana.play();
                break;

            case "へ":
                var heKana = new Audio('sounds/he.mp3');
                heKana.play();
                break;

            case "ほ":
                var hoKana = new Audio('sounds/ho.mp3');
                hoKana.play();
                break;

            case "ま":
                var maKana = new Audio('sounds/ma.mp3');
                maKana.play();
                break;

            case "み":
                var miKana = new Audio('sounds/mi.mp3');
                miKana.play();
                break;

            case "む":
                var muKana = new Audio('sounds/mu.mp3');
                muKana.play();
                break;

            case "め":
                var meKana = new Audio('sounds/me.mp3');
                meKana.play();
                break;

            case "も":
                var moKana = new Audio('sounds/mo.mp3');
                moKana.play();
                break;

            case "ら":
                var raKana = new Audio('sounds/ra.mp3');
                raKana.play();
                break;

            case "り":
                var riKana = new Audio('sounds/ri.mp3');
                riKana.play();
                break;

            case "る":
                var ruKana = new Audio('sounds/ru.mp3');
                ruKana.play();
                break;

            case "れ":
                var reKana = new Audio('sounds/re.mp3');
                reKana.play();
                break;

            case "ろ":
                var roKana = new Audio('sounds/ro.mp3');
                roKana.play();
                break;

            case "や":
                var yaKana = new Audio('sounds/ya.mp3');
                yaKana.play();
                break;

            case "ゆ":
                var yuKana = new Audio('sounds/yu.mp3');
                yuKana.play();
                break;

            case "よ":
                var yoKana = new Audio('sounds/yo.mp3');
                yoKana.play();
                break;

            case "わ":
                var waKana = new Audio('sounds/wa.mp3');
                waKana.play();
                break;

            case "を":
                var woKana = new Audio('sounds/o.mp3');
                woKana.play();
                break;

            case "ん":
                var nKana = new Audio('sounds/n.mp3');
                nKana.play();
                break;




            default: console.log(buttonInnerHTML);
                break;
        }





    });

};

// function KanaAudioConstructorArray(character, audioFile){
//     this.character = character;
//     this.audioFile = audioFile;
// }
//     var kanaArrayLength = KanaAudioConstructorArray.length;
//     var aKana = new KanaAudioConstructorArray("あ", 'sounds/a.mp3');
//     var iKana = new KanaAudioConstructorArray("い", 'sounds/i.mp3');
//     var uKana = new KanaAudioConstructorArray("う", 'sounds/u.mp3');
//     var eKana = new KanaAudioConstructorArray("え", 'sounds/e.mp3');
//     var oKana = new KanaAudioConstructorArray("お", 'sounds/o.mp3');

//         for (var i = 0; i < kanaArrayLength; i++){
//             if(i = KanaAudioConstructorArray[i]){
//                 KanaAudioConstructorArray[i].play();
//             };
//         };