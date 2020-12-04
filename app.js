//тоглогчийн ээлжийг хадгалах хувьсагч. нэгдүгээр тоглогчийг 0 , хоёрдугаар тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;
// тоглогчдын цуглуулсан оноог хадгалах хувьсагч
 var score = [0, 0];
//тоглогчын ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
// шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн утгыг энэ хувьсагчид
// санамсаргүйгээр үүсгэж өгнө.
// var diceNumber =Math.floor (Math.random() * 6)+1;

                       // Хичээл 41 Домруу хандах
//  <div class="player-score" id="score-0">43</div> window.document дотор Dom-ын элементыг хайж
//  олдог тусгай querySelector фунц байдаг ашигласан байна. id-гаар нь хайхын тулд урд нь # тавьж өгнө.
// textcontent нь яг өгөгдөл рүү нь хандаж байна өгөгдлийн утгын өөрчлөхийн тулд.
//  window.document.querySelector('#score-0').textContent = dice;

// код маань window обект дотор байгаа тул заавал window гэж бичих шаардлагагүй
//  document.querySelector('#score-1').textContent = dice;

// өгөгдөлрүү нь html-ийн код бичихийн тулд innnerHTML гэж байгаад бичнэ.
// window.document.querySelector('#score-0').innerHTML = "<em> Yes ! <em>";

// шооны зургийг алга болгохын тулд css доторх .dice гэсэн class-ын хайж олоод display гэснийг none 
// болгож байна. display:none гэж css дээр бичхийг javascript-ээс ингэж бичиж оруулж байна.
// window.document.querySelector(".dice").style.display = "none";

// document.getElementById('#score-0').textContent = 0; 1. getElementById нь DOM-оос элементийн id-аар хайлт хийж олно.
// querySelector нь бүх элементээс хайлт хийдэг болхоор (# id) гэж хайлт хийнэ. getElementById- аас удаан хайлт хийдэг тул элементийн id-аар
// хайлт хийхдээ getElementById функцийг ашигладаг. DOM-оос хайгаад элемент нь олдохгүй бол DOM нь null утга өгнө.


// Программ эхлэхэд бэлтгэе
document.getElementById('score-0').textContent = 0;       // 1-р тоглогчийн оноог дом дээр 0 болгож байна
document.getElementById('score-1').textContent = 0;       //  2-р тоглогчийн оноог дом дээр 0 болгож байна
document.getElementById('current-0').textContent = 0;     //    1-р тоглогчийн current оноог дом дээр 0 болгож байна
document.getElementById('current-1').textContent = 0;     //     1-р тоглогчийн current оноог дом дээр 0 болгож байна

// console.log('шоо :'+ diceNumber);
                                 // Хичээл 42 Эвент гэж ву вэ? callback,anonymous event listner функцууд


/* Эвент нь веб хуудас дээр ямар нэг үйлдэл хийгдлээ гэж броузераас javacript кодонд мэдэгддэг процесс юм.
Жишээ нь товч клик хийх,скролдох,гаран дээр товч дарах, цонхны хэмжээг өөрчлөх гэх мэт
Эвент боловсруулагч (event listener): нь уг эвентийг хүлээж аваад хариу үйлдэл хийдэг javascript дээрх бидний
бичсэн функц юм. https://developer.mozilla.org/en-US/docs/Web/Events энэ ликнээс эвентүүдийг харж болно.
javascript engine дотор байдаг message queue (оочер,дараалал) веб хуудсан дээр үүссэн эвентүүдийн боловсруулагдахаа
хүлээгээд оочирлож зогсдог газар юм. javascript нь single threaded буюу процесс функцуудыг нэг нэгээр нь дарааллуулан 
боловсруулдаг онцлогтой хэл юм. Өөрөөр хэлбэл таны фунц ажиллаад эхэлсэн л бол дуустал нь өөр javascript код ажиллаж 
чадахгүй гэсэн үг. зарим хэл multi treaded буюу олон процессыг зэрэг хийх чадвартай байдаг жишээ нь java , ruby
execution stack нь эхлээд хэрэглэгчийн функцуудын execution context-ыг үүсгэж байх тэр хооронд эвентүүд
message queue дотроо хүлээж байна, execution context-ыг үүсгэж дууссаны дараа дарагдсан эвентийн функцыг дуудаж
дарааллаар нь execution stack нь execution context-ын үүсгэж боловсруулж эхэлдэг.event loop гэсэн давтаж байдаг
процесс байдаг нь энэ юмаа message queue хоосорч дуустал давтна.

Callback фунц: А функцийн аргументруу Б функцийг дамжуулая. А фунц нь дотроо Б функцийг дуудаж ажиллуулна.
Энэ тохиолдолд Б функцийг Callback фунц гэнэ. Өөрөөр хэлбэл дараа дуудагдхаар дамжуулагдсан функц юм. javascripted
функц бол обект байдаг онцлогтой.
жишээ нь: 
function hello(){
    console.log("sainuu");
}
 function greet (aaa){
     aaa();
 } 
 greet(hello);
 Anonymous функц:
 Фунцийн аргумемтруу нэргүй функц шууд бичиж дамжуулж болдог. Ийм нэргүй функцийг anonymous функц гэдэг.
жишээ нь :
funtion greet (aaa){
    aaa();
}
greet(funtion(){console.log("өглөөний мэнд")});
Ганцхан газар хэрэглэгдэх функц бичхээр бол ингэж бичнээ өөр газар дуудах шаардлагагүй болхоор.



*/ 

// Шоо шиддэг товчоо ажилладаг болгоцгооё
/* програмчлах дараалал:
 1.Roll dice товчийг DOM-с авна.
 2. Уг товч дээр хулганаар CLICK хийхэд ажиллах эвент листенер функц бичиж холбоно.
 3. клик хийхэд : 
     1-6 хооронд санамсаргүй тоо үүсгэнэ.
     Dom-оос шооны зургийн обектийг авна.
     Уг обектийг веб дээр харагддаг болгоно.
     уг обектийн зургийг random-оор үүссэн тооны дагуу өөрчилнө.
   
*/

/* энэ event listener нь Callback функцээр дуудагдаж байна. Манай тохиолдолд ганцхан roll dice дээр дархад энэ 
функ дуудагдана өөр товч дарагдахад дуудагдахгүй тул зохимжгүй юм тиймээс Anonymous функц ашиглах нь зөв

document.querySelector(".btn-roll").addEventListener("click",shooShid);
function shooShid(){
 var diceNumber =Math.floor (Math.random() * 6)+1;
 alert("Шоо буулаа : " + diceNumber);

}
*/
var diceDom = document.querySelector(".dice");  // DOM-оос нэг удаа хайж олоод хувьсагчинд хийсэн.Өмнөн DOM-оос 3 удаа дуудаж байсныг бодвол хурдан 1 удаа дуудна
diceDom.style.display = "none";    //     шооны зургийг дэлгэц дээрээс алга богож байна

// энэ тохиолдолд Anonymous функц-ээр дуудаж байна.
document.querySelector(".btn-roll").addEventListener("click",function(){
    var diceNumber =Math.floor (Math.random() * 6)+1;  // 1-6 хүртэл санамсаргүй утга diceNumber-т хийж байна
    diceDom.style.display = "block";                   // шооны зургийг дэлгэц дээрээс алга богосон байсан эргүүлж гаргаж ирсэн.
    diceDom.src = 'dice-' + diceNumber + '.png' ;     // DOM дээрээс шооны зургийг олоод өөрчилж байна. diceNumber-ын утгаар өөрчилж байна.
    
    // alert("Шоо буулаа : " + diceNumber);


// Буусан тоо нь 1 ээс ялгатай бол идэвхтэй тоглогчийн тоог нэмэгдүүлэнэ.
   if (diceNumber !== 1) {
    // тоог нэмэгдүүлж байна.   
    roundScore = roundScore + diceNumber;
    // нэмэгдүүлсэн тоогоо Dom-дээр харгалзах элемент дээр гаргаж байна.
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    
    
}
else {
    // тоглогч 1 буулгасан тул roundscore-ыг 0 богож байна
    roundScore = 0 ; 
    // тоглогч 1 буулгасан тул DOM-н элемэнтийн 0 богож байна
    document.getElementById('current-' + activePlayer).textContent = 0;
    //тоглогч 1 буулгасан тул нөгөө тоглогчыг идэвхжүүлнэ.
    activePlayer === 0 ? (activePlayer=1):(activePlayer=0);
    
    // улаан цэгийг шилжүүлэх
    /* classlist нь class-уудын list энэ доторх class уудаа нэмж хасаж болдог.classlist дотор add remove 
    toglgle гэж байна class.toggle("active") гэж бичих ба toggle нь active class байвал хасна байхгүй бол нэмдэг
    функц юм.
    */
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    setTimeout(function(){diceDom.style.display = "none"}, 1000);
    
    // if(activePlayer===0) 
    // {
    //     activePlayer = 1;
    // }
    // else activePlayer = 0; 
}


    });
 
   