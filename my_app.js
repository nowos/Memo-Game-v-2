var one = 'empty';
var two = 'empty';
var click = 0;
var round = 0;
var matched = 0;
var cards;
var name;
var lastName;
var username;
var imagesBox = new Array;
var removedItems = new Array;
var minPair;
var lvl;
var dx = 0;

var imagesBox1 = [
   "images/WilkMEM.jpg",
   "images/KonMEM.jpg",
   "images/LionMEM.jpg",
   "images/owcaMEM.jpg",
   "images/LionMEM.jpg",
   "images/WilkMEM.jpg",
   "images/owcaMEM.jpg",
   "images/KonMEM.jpg"
];
var imagesBox2 = [
   "images/ChichenMEM.jpg",
   "images/ColosseumMEM.jpg",
   "images/EifelMEM.jpg",
   "images/ChichenMEM.jpg",
   "images/TajMahalMEM.jpg",
   "images/ColosseumMEM.jpg",
   "images/pyramidMEM.jpg",
   "images/statueMEM.jpeg",
   "images/pyramidMEM.jpg",
   "images/TajMahalMEM.jpg",
   "images/EifelMEM.jpg",
   "images/statueMEM.jpeg"
];
var imagesBox3 = [
   "images/znak1.png",
   "images/znak2.png",
   "images/znak9.png",
   "images/znak5.png",
   "images/znak3.png",
   "images/znak6.png",
   "images/znak1.png",
   "images/znak4.png",
   "images/znak5.png",
   "images/znak6.png",
   "images/znak4.png",
   "images/znak7.png",
   "images/znak9.png",
   "images/znak2.png",
   "images/znak7.png",
   "images/znak3.png"

];

//funkcja rysowania pola po naciśnieciu przycisków

var btDesk = function () {

   for (i = 1; i <= 3; i++) {

      $('.btStart' + i).on('click', function () {

         if ($(this)[0].className === 'btStart1') {

            cards = 8;
            imagesBox = imagesBox1;
            //minimalna ilość par
            minPair = 4;
            //lvl
            imagesBox = shuffle(imagesBox);
            //wyzeruj rundy
            round = 0;
            //ustaw level do rankingu
            lvl = 1;

            for (z = 1; z <= 4; z++) {
               $('.deskContainer').prepend('<div class = "imagesContainer' + z + '">' + '</div>');

               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');

               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');

            }
            ;
            window.location.hash = "#view";
         }
         ;

         if ($(this)[0].className === 'btStart2') {

            cards = 12;
            imagesBox = imagesBox2;
            //ustaw liczbę kart
            
            minPair = 6;

            imagesBox = shuffle(imagesBox);
            //wyzeruj rundy
            round = 0;
            //ustaw level do rankingu
            lvl = 2;

            for (z = 1; z <= 4; z++) {
               $('.deskContainer').prepend('<div class = "imagesContainer' + z + '">' + '</div>');

               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');

               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');
               
               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');

            };

            window.location.hash = "#view";

         };

         if ($(this)[0].className === 'btStart3') {

            cards = 16;
            imagesBox = imagesBox3;
            //ustaw liczbę kart
 
            minPair = 8;

            imagesBox = shuffle(imagesBox);
            //wyzeruj rundy
            round = 0;
            //ustaw level do rankingu
            lvl = 3;

         for (z = 1; z <= 4; z++) {
               $('.deskContainer').prepend('<div class = "imagesContainer' + z + '">' + '</div>');

               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');

               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');
               
               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');
               
               dx = dx + 1;
               $('.imagesContainer' + z).prepend('<div class = "emptyImg' + ' d' + dx + '"></div>');

            };

            window.location.hash = "#view";

         };
         
         clickFunction();
         $('.btStart1')[0].disabled = true;
         $('.btStart2')[0].disabled = true;
         $('.btStart3')[0].disabled = true;
      });
   };
   
};
//funkcja przywracajaca usuniete obrazki z localStorage
var setRemovedItems = function () {

   for (z = 0; z < 30; z++) {
      var itemR = removedItems[z];
      if (itemR !== null && itemR !== 'undefined') {
         localStorage.setItem(lvl + " " + z, removedItems[z]);
      }
   }
};

//funkcja ustawiajaca ranking po podaniu nazwy uzytkownika
var setRanking = function () {

   Loop1:
           for (i = 1; i <= 10; i++) {
      Loop2:
              for (z = minPair; z < 25; z++) {

         var sc = $('.Score' + i).html();

         if (z < sc) {
            var item = localStorage.getItem(lvl + " " + z);
            if (item !== null && item !== 'undefined') {

               $('.Score' + i).html(z);
               $('.User' + i).html(item);
               localStorage.removeItem(lvl + " " + z);
               removedItems[z] = item;
               continue Loop1;
            }
         }
      }
   }
   setRemovedItems();
};
//funkcja losujaca rozstawienie kart
var shuffle = function (array) {
   var currentIndex = array.length, temporaryValue, randomIndex;

   while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
   }

   return array;
};

//funkcja usuwajaca obrazki po zakonczeniu rundy
var removeImages = function () {

   for (i = 1; i <= cards; i++) {
      //usuń content, a potem samą klasę additional ze wszystkich div-ów, w których jest 
      $('.additional' + i).css({'content': ''});
      $('.d' + i)[0].classList.remove("additional" + i);
   }
   ;
};
//funkcja usuwajaca obrazki po zakonczeniu rundy
var clickCounter = function () {
   if (click >= 2) {
      removeImages();
      click = 0;
   }
};
//funkcja ustawiajaca rundy
var roundFunction = function () {
   $('.round').text("Round " + round);
};
//funkcja wygranej, wyswietlajaca sie po dopasowaniu wszystkich par
var winFunction = function () {
   alert('You won!! Congratulations!!');
   matched = 0;
   window.location.hash = "#view2";
};


//funkcja dodawania nazwy uzytkownika do rankingu
var userName = function () {

   $('.submit').on('click', function () {
      name = $('#inlineFormName').val();
      lastName = $('#inlineFormLastName').val();
      username = name + ' ' + lastName;
      window.location.hash = "#view2";

      Loop3:
              for (i = 1; i <= 10; i++) {

         var sc = $('.Score' + i).html();

         if (round < $('.Score' + i).html()) {

            //to dodaj w tym miejscu wartość round, username i przerwij pętle
            $('.Score' + i).html(round);
            $('.User' + i).html(username);
            localStorage.setItem(lvl + " " + round, username);

            break Loop3;
         }
      }
      setRanking();
   });
};

// funkcja klikniecia kart odwracajaca obrazki i obslugujaca ich parowanie 
var clickFunction = function () {


   for (i = 1; i <= cards; i++) {
      $('.d' + i).on('click', onClickFunction = function () {
         clickCounter();
         click = click + 1;
         for (var i = 0; i <= cards; i++) {

            if ($(this)[0].className === "emptyImg d" + (i + 1)) {

               var imgChosen = $(this)[0].className;
               console.log(imgChosen);

               if (i <= 8) {
                  char = imgChosen.charAt(imgChosen.length - 1);
               }
               //jeśli numer karty >= 10
               else if (i === 9) {
                  char = 10;
               } else if (i > 9) {
                  var firstChar = imgChosen.charAt(imgChosen.length - 2);

                  var secondChar = imgChosen.charAt(imgChosen.length - 1);

                  char = firstChar + secondChar;
               }
//dodanie klasy 

               $(this).addClass('additional' + char);
              
//dodanie do dodanej klasy obrazka 
               $('.additional' + char).css('content', 'url' + '("' + imagesBox[i] + '")');
                console.log($('.additional' + char));
               //jeśli one puste to przypisz nazwę obrazka
               if (one === 'empty') {
                  one = imagesBox[i];
               }
//jeśli one pełne to przypisz nazwę obrazka do zmiennej two
               else if (one !== 'empty') {
                  two = imagesBox[i];
               }
               //MATCHING
//jeśli oba pełne to porównanie wystąpi
               if (one !== 'empty' & two !== 'empty') {

                  //aktualizacja rundy
                  round = round + 1;
                  roundFunction();
                  if (one === two) {
                     one = 'empty';
                     two = 'empty';
                     matched = matched + 1;
                     var pairs = cards / 2;
                     if (matched === pairs) {
                        winFunction();
                     }

//jeśli będzie dopasowanie, to zainstaluj CT obrazek
                     for (i = 1; i <= cards; i++) {
                        if ($('.d' + i).hasClass('additional' + i)) {
                           $('.d' + i).addClass('matched');
                        }
                        ;
                     }
//jeśli są niedopasowane
                  } else {
                     one = 'empty';
                     two = 'empty';

                  }
               }
            }
            ;
         }
         ;
      });
   }
   ;
};
//funkcja powrotu do startu po nacisnieciu przycisku
var backToStart = function () {
   $('.btback').on('click', function () {
      location.reload();
   });
};

var main = function () {
   btDesk();
   userName();
   backToStart();
};

$(document).ready(main);
