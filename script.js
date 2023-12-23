var typing1 = new Typed('#element', {
    strings: [
      '^4000Hi,^1000 this is a message for my beloved girl.^1000',
      'This pretty girl just turned 23 today!^2500',
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

function typing6() {
  new Typed('#element6', {
    strings: [
      "^1000It goes like this,^1000<br> I don\'t know where to start,^500<br> or where to end,^500<br> because honestly I cannot describe how really proud and grateful I am to met a girl like her.^500<br> <br> It started with an unplanned meeting.<br> I was never expecting to be with her, but god plans are the best.^500<br> when I\'m not looking for love and planned to focus on myself first, all of a sudden, her shine hits me.^500<br><br> It felt like a sunrise after dawn,^500 she came and light up my world,^600 not a bright one,^500 but more like a warm and full of loving sunrays fell over my face,^500 it gives me a peace of mind and heart.^1000 my eyes closed,^500 I cannot hold my smile,^500 and stretched out my hands,^500 as if her warmth embraced me.^1000<br> I suddenly wanna shout^500 \"please, take me\"^500,<br> And I think to myself,^500 \"how can I miss this precious once in a lifetime oppportunity?\".^1000<br> So I was determined to follow it, ^500I\'m gonna walk to the end of the cape,^500 I\'m gonna sail to the end of the ocean,^500 just to catch her warmth forever,^500 because I don\'t want it to end.^1000<br> <br> She is a very kind human being,^500 she\'s very sincere,^500 she loved her family,^500 she truly appreciates the meaning of love,^500 she's a hardworker,^500 she's smart even though most of the time she's slow 😂 but it doesn't matter,^500 she's humble,^500 she dressed well,^500 she has pretty eyes,^500 pretty face,^500 very positive vibes,^500 she's loyal,^500 Oh, I could go on and on all day..^500 but the point is,^500 she's perfect for me,^1000 I love her very very much,^1000 once again happy birthday to my girl!,^500 I hope you're always in a good health,^500 be a better person,^500 always happy,^500 be stronger,^500 always love your fams, me, and your friends!✨🎉",
      ],
    typeSpeed: 70,
    backSpeed: 20,
    onComplete: (self) => {
      
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
  document.getElementById('btngroup3').classList.toggle('visible');
  setTimeout(function() {
    document.getElementById('btngroup3').style.display = 'none';
  }, 1100);
  setTimeout(function() {
    document.getElementById('text-container3').classList.toggle('visible');
  }, 1500);
  setTimeout(function() {
    document.getElementById('text-container3').style.display = 'none';
  }, 2500);
  setTimeout(function() {
    document.getElementById('text-container5').classList.toggle('visible');
  }, 1500);
  setTimeout(function() {
    document.getElementById('text-container5').style.display = 'none';
  }, 2500);
  setTimeout(function() {
    document.getElementById('text-container6').style.display = 'block';
  }, 2600);
  setTimeout(function () {
    typing6();
  }, 2600);
  setTimeout(function() {
    document.getElementById('text-container6').classList.toggle('visible');
  }, 2700);
  setTimeout(function() {
    document.getElementById('text-container6').classList.toggle('animation');
  }, 12000);
  setTimeout(function () {
    document.getElementById('bg-2').classList.toggle('before');
    document.getElementById('sea').classList.toggle('before');
    document.getElementById('cloud').classList.toggle('before');
    document.getElementById('sun').classList.toggle('before');
  }, 45000);
  setTimeout(function(){
    document.getElementById('box1').classList.toggle('change');
    document.getElementById('element6').classList.toggle('change');
  }, 47000);
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


