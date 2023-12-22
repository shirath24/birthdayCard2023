// Clear all caches
caches.keys().then(function(cacheNames) {
  cacheNames.forEach(function(cacheName) {
      caches.delete(cacheName);
  });
});

var typing1 = new Typed('#element', {
    strings: [
      '^4000Hi,^1000 this is a message for my beloved girl.^1000',
      'This pretty girl just turned 22 today!^2500',
      "^500I made this as a little gift for her,^1000<br>but not just that, I also wanna express my feelings and my thoughts about her",
      "You must read it wholeheartedly cuz she deserves it ❤^1000",
      'But first,^1500 are you my girl?'],
    typeSpeed: 50,
    backSpeed: 10,
    onComplete: (self) => {
      document.getElementById('btngroup1').style.display = 'block';
      setTimeout(function() {
        document.getElementById('btngroup1').classList.toggle('visible');
      }, 500);},
  });

function typing2() {
  new Typed('#element2', {
    strings: [
      '^1000Really? ^1000 if so, then try to answer this question.^1000',
      'Where was our first date?',
      ],
    typeSpeed: 50,
    backSpeed: 10,
    onComplete: (self) => {
      document.getElementById('btngroup2').style.display = 'block';
      setTimeout(function() {
        document.getElementById('btngroup2').classList.toggle('visible');
      }, 500);
    }
  })
};

function typing3() {
  new Typed('#element3', {
    strings: [
      "^500Well,^1000 you're not her^1000, but I wanna tell you something about her anyway..",
      ],
    typeSpeed: 50,
    backSpeed: 10,
    onComplete: (self) => {
      document.getElementById('btngroup3').style.display = 'block';
      setTimeout(function () {
        document.getElementById('btngroup3').classList.toggle('visible');
      }, 100);
    },
  })
};

function typing4() {
  new Typed('#element4', {
    strings: [
      "Lucky guess,^1000 let's try another question.",
      "^1000What kind of flower crochet I gave on our first date?",
      ],
    typeSpeed: 50,
    backSpeed: 10,
    onComplete: (self) => {
      document.getElementById('btngroup4').style.display = 'block';
      setTimeout(function () {
        document.getElementById('btngroup4').classList.toggle('visible');
      }, 100);
    },
  })
};

function typing5() {
  new Typed('#element5', {
    strings: [
      "yeay! you did it!^1000",
      "Happy birthday baby!^1000",
      "Happy birthday my love!❤^1000",
      "Happy birthday my sunshine!🌞^1000",
      "Happy birthday my flower!💐^3000",
      "I wanna tell you something about my lovely girl..",
      ],
    typeSpeed: 50,
    backSpeed: 20,
    onComplete: (self) => {
      document.getElementById('btngroup3').style.display = 'block';
      setTimeout(function () {
        document.getElementById('btngroup3').classList.toggle('visible');
      }, 100);
      setTimeout(function(){
        document.getElementById('firework').classList.toggle('visible');
      }, 1000);
    },
  })
};

setTimeout(function () {
  document.getElementById('body').classList.toggle('navy');
}, 500);

setTimeout(function(){
  document.getElementById('text-container1').classList.toggle('visible');
}, 3500);

document.getElementById('music-btn').addEventListener('click', function() {
  document.getElementById('music').play();
  document.getElementById('music').volume = 0.5;

});

const container = document.querySelector('.fireworks');
      const fireworks = new Fireworks.default(container);
      fireworks.start();

setTimeout(function(){
  document.getElementById('firework').classList.toggle('visible');
}, 14500);

setTimeout(function(){
  document.getElementById('firework').classList.toggle('visible');
}, 17000);

function typetrigger2() {
  document.getElementById('text-container1').style.display = 'none';
  typing2();
  document.getElementById('btn1').removeEventListener('click', typetrigger2);
  document.getElementById('btngroup1').classList.toggle('visible');
  setTimeout(function() {
    document.getElementById('btngroup1').style.display = 'none';
  }, 1100);
};
document.getElementById('btn1').addEventListener('click', typetrigger2);

function typetrigger3() {
  document.getElementById('text-container1').style.display = 'none';
  document.getElementById('text-container2').style.display = 'none';
  document.getElementById('text-container4').style.display = 'none';
  typing3();
  document.getElementById('text-container3').classList.toggle('visible');
  document.getElementById('btn2').removeEventListener('click', typetrigger3)
  document.getElementById('btngroup1').classList.toggle('visible');
  setTimeout(function() {
    document.getElementById('btngroup1').style.display = 'none';
  }, 1100);
  document.getElementById('btngroup2').classList.toggle('visible');
  setTimeout(function() {
    document.getElementById('btngroup2').style.display = 'none';
  }, 1100);
  document.getElementById('btngroup4').classList.toggle('visible');
  setTimeout(function() {
    document.getElementById('btngroup4').style.display = 'none';
  }, 1100);
};

function typetrigger4() {
  document.getElementById('text-container2').style.display = 'none';
  typing4();
  setTimeout(function() {
    document.getElementById('text-container4').classList.toggle('visible');
  }, 1000)
  document.getElementById('btngroup2').classList.toggle('visible');
  setTimeout(function() {
    document.getElementById('btngroup2').style.display = 'none';
  }, 1100);
};

function typetrigger5() {
  document.getElementById('text-container4').style.display = 'none';
  typing5();
  setTimeout(function() {
    document.getElementById('text-container5').classList.toggle('visible');
  }, 1000)
  setTimeout(function(){
    document.getElementById('firework').classList.toggle('visible');
  }, 1000);
  document.getElementById('btngroup4').classList.toggle('visible');
  setTimeout(function() {
    document.getElementById('btngroup4').style.display = 'none';
  }, 1100);
}

document.getElementById('btn2').addEventListener('click', typetrigger3);
document.getElementById('btn3').addEventListener('click', typetrigger3);
document.getElementById('btn4').addEventListener('click', typetrigger4);
document.getElementById('btn5').addEventListener('click', typetrigger3);
document.getElementById('btn6').addEventListener('click', typetrigger3);
document.getElementById('btn7').addEventListener('click', typetrigger5);
document.getElementById('btn8').addEventListener('click', typetrigger3);
document.getElementById('btn9').addEventListener('click', typetrigger3);
document.getElementById('btn10').addEventListener('click', typetrigger3);


// document.getElementById('btn1').addEventListener('click', function() {
//   document.getElementById('body').classList.toggle('navy');
// });

