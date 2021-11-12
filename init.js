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
    const hand = fnDraw(input === 'second'? 6 : 5);
    if(!hand.length){
      Sweetalert2.fire({
        title: "Whops!",
        text: "Your deck must contain at least 1 card.",
        icon: "warning",
        confirmButtonText: "Ugh, my bad!",
      });
    } else {
      let html = "";      
      let handHtml = "<div style='display: flex; align-items: flex-start; justify-content: space-between;'>";
      hand.forEach(item => {
        handHtml+=`<img width="100px" src="${item}">`;
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
          confirmButton: 'engine-button engine-button-navbar engine-button-primary'
        },
        confirmButtonText:'Draw',
        confirmButtonAriaLabel: 'Draw',
        showClass: {
          backdrop: 'swal2-noanimation', // disable backdrop animation
          popup: '',                     // disable popup animation
          icon: ''                       // disable icon animation
        },
        // hideClass: {
        //   popup: '',                     // disable popup fade-out animation
        // },
        preConfirm: (result)=>{
          fnTestHand(result);
          return false;
        }
      });
    }
    
  }

  function fnDraw(n = 5) {    
    const mainDeck = document.querySelectorAll("#editor-main-deck img");

    let deck = []; //image urls
    
    [...mainDeck].forEach(card=>deck.push(card.getAttribute('src')));
    const shuffled = fnShuffle(deck);

    return shuffled.slice(0, n);
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
