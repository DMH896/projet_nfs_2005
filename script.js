
const formulaire = document.getElementById("quiz-form");
const resultat = document.getElementById("resultat");


if (formulaire) {
  formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const bonnesReponses = {
      q1: "b",
      q2: "a",
      q3: "c",
      q4: "a",
      q5: "b",
      q6: "c",
      q7: "a",
      q8: "b",
      q9: "a",
      q10: "b"
    };

    let score = 0;

    
    for (let question in bonnesReponses) {
      const reponse = formulaire.querySelector('input[name="' + question + '"]:checked');

      if (reponse && reponse.value === bonnesReponses[question]) {
        score = score + 1;
      }
    }

    resultat.textContent = "Ton score : " + score + " / 10.";

    if (score >= 8) {
      resultat.textContent += " Très bien, tu connais bien le jeu !";
    } else if (score >= 5) {
      resultat.textContent += " Pas mal, mais tu peux encore réviser.";
    } else {
      resultat.textContent += " Relis les pages du site et recommence !!!";
    }
  });

  
  formulaire.addEventListener("reset", function() {
    resultat.textContent = "";
  });
}