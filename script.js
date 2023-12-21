var typing1 = new Typed('#element', {
    strings: [
      '^4000Hi,^1000 this is a message for my beloved girl.^1000',
      // 'My beloved girl just turns 22 today!^1000',
      // "Yes, she's my girlfriend^1000, and she have to read it wholeheartedly cuz she deserves it ❤^1000",
      'But first,^1500 are you my girl?'],
    typeSpeed: 50,
    backSpeed: 30,
    onComplete: (self) => {
      document.getElementById('btngroup1').style.display = 'block';
      setTimeout(function() {
        document.getElementById('btngroup1').classList.toggle('visible');
      }, 500);
    },
  });

function typing2() {
  new Typed('#element2', {
    strings: [
      '^1000Really? ^1000 if so, then try answer this question.^1000',
      'Where was our first date?',
      ],
    typeSpeed: 50,
    backSpeed: 20,
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
      "^1000Well,^1000 you're not her^1000, but I wanna tell you something about her anyway..^3000",
      ],
    typeSpeed: 50,
    backSpeed: 40,
    onComplete: (self) => {
      document.getElementById('text-container3').classList.toggle('visible');
    },
  })
};


setTimeout(function () {
  document.getElementById('body').classList.toggle('navy');
}, 500);

setTimeout(function(){
  document.getElementById('text-container1').classList.toggle('visible');
}, 3500);

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
}
document.getElementById('btn2').addEventListener('click', typetrigger3);

document.getElementById('btn3').addEventListener('click', typetrigger3);
document.getElementById('btn5').addEventListener('click', typetrigger3);
document.getElementById('btn6').addEventListener('click', typetrigger3);


// document.getElementById('btn1').addEventListener('click', function() {
//   document.getElementById('body').classList.toggle('navy');
// });