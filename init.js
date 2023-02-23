(function () {
  function fnAddButtons() {
    var btn = document.createElement("button");
    btn.innerText = "Test-Hand";
    btn.id = "editor-starthand-button";
    btn.classList = "engine-button engine-button-navbar engine-button-default editor-button-navbar";
	btn.style.width = "auto";
    document.querySelector("#editor-menu-content").appendChild(btn);
  }

  function fnDefineEvents() {
    document
      .getElementById("editor-starthand-button")
      .addEventListener("click", function (event) {
        fnTestHand();
      });
  }

  function fnTestHand(input = 'first') {    
    let deck = fnDraw(); //entire deck shuffled.
    const hand = deck.splice(0,input === 'second'? 6 : 5); //draw starting hand and remove it from main deck
    
    if(!hand.length){
      Sweetalert2.fire({
        title: "Whops!",
        text: "Your deck must contain at least 1 card.",
        icon: "warning",
        confirmButtonText: "Ugh, my bad!",
      });
    } else {
      let html = "";      
      let handHtml = "<div id='duelingnexus-hand-simulation-container' style='display: flex; align-items: flex-start; flex-wrap: wrap; justify-content: center;'>";
      hand.forEach(item => {
        handHtml+=`<img width="100px" src="${item}" style="margin:2px">`;
      });
      handHtml+="</div>";
      html+=handHtml;
      const swal = Sweetalert2.fire({
        title: 'Start-Hand Simulation',
        input: 'radio',
        inputValue: input,
        inputOptions: {
          'first': 'Go First',
          'second': 'Go Second'
        },
        inputValidator: (value) => {
          if (!value) {
            return 'You need to choose something!'
          }
        },
        html: html,
        width: 700,
        showCloseButton: true,
        focusConfirm: true,
        allowEnterKey: false,
        buttonsStyling: false,
        customClass: {
          confirmButton: 'engine-button engine-button-navbar engine-button-primary',
          denyButton: 'engine-button engine-button-navbar engine-button-primary'
        },
        confirmButtonText:'Draw',
        confirmButtonAriaLabel: 'Draw',
        denyButtonText: '+1',
        denyButtonAriaLabel: '+1',
        showClass: {
          backdrop: 'swal2-noanimation', // disable backdrop animation
          popup: '',                     // disable popup animation
          icon: ''                       // disable icon animation
        },
        showDenyButton: true,
        // hideClass: {
        //   popup: '',                     // disable popup fade-out animation
        // },
        preConfirm: (result)=>{ //'Draw' button is clicked
          fnTestHand(result);
          return false;
        },
        preDeny: ()=>{ //'+1' button is clicked
          fnAppendCards(deck.splice(0,1));
          return false;
        }
      });
    }
    
  }

  function fnAppendCards(cards){
    if(!cards || !cards.length){
      return;
    }
    let elem = document.querySelector("#duelingnexus-hand-simulation-container");
    cards.forEach(card => {
      elem.innerHTML+=`<img width="100px" src="${card}" style="margin:2px">`;
    });
  }

  function fnDraw() {    
    const mainDeck = document.querySelectorAll("#editor-main-deck img");

    let deck = []; //image urls
    
    [...mainDeck].forEach(card=>deck.push(card.style.backgroundImage.split('"')[1]));
    const shuffled = fnShuffle(deck);

    return shuffled.slice(0, shuffled.length);
  }

  function fnShuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  fnAddButtons();
  fnDefineEvents();
})();
