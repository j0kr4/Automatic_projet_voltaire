// Fonction pour effectuer un clic sur le bouton actuel
function cliquerSurBouton() {
  var understoodButton = document.querySelector('.understoodButton');
  if (understoodButton) {
    setTimeout(function() {
		understoodButton.click();
		setTimeout(function() {
        cliquerSurExitButton(); // Clique sur le bouton avec la classe "exitButton" après 3 secondes
		}, 3000);
    }, 8000); // Délai de 8 secondes avant de cliquer sur understoodButton
  }
  var buttonOk = document.querySelector('.buttonOk');
  if (buttonOk) {
	cliquerSurButtonsOk(); // Clique sur les boutons avec la classe "buttonOk"
  }

  var bouton = document.querySelector('#btn_question_suivante');
  if (bouton) {
    bouton.click();
    setTimeout(cliquerSurNextButton, 3000); // Clique sur le bouton nextButton après 3 seconde
  }
}

// A verifié : ne fonctionne pas correctement mais fait le taff.
// Fonction pour cliquer sur tous les boutons avec la classe "buttonOk" avec un délai de 5 secondes entre chaque clic
function cliquerSurButtonsOk() {
  var buttonsOk =  setTimeout(function() {
  document.querySelectorAll('.buttonOk');
  }, 5000);
  buttonsOk.forEach(function(button, index) {
    setTimeout(function() {
      button.click();
    }, index * 2000); // Délai de 2 secondes multiplié par l'index pour espacer les clics
  });
}

function cliquerSurExitButton() {
  var exitButton = document.querySelector('.exitButton');
  if(exitButton) {
	exitButton.click();
  }
}

// Fonction pour effectuer un clic sur le bouton avec la classe nextButton
function cliquerSurNextButton() {
  var nextButton = document.querySelector('.nextButton');
  if (nextButton) {
    nextButton.click();
  }
}

// Fonction pour effectuer un clic toutes les 60 secondes
function cliquerPeriodiquement() {
  setInterval(cliquerSurBouton, 20000); // 20 000 ms = 20 secondes
}

// Appel de la fonction pour commencer le clic périodique
cliquerPeriodiquement();
