// ================================================
// GRATIS RONDJES MET HET REUZENRAD OP DE KERMIS!!!
// ================================================

// Opdracht om computational thinking te oefenen.
// CASUS: GRATIS RONDJES MET HET REUZENRAD OP DE KERMIS!!!
// Een kermis uitbater bedenkt een actie om kermisklanten gratis ritjes op het reuzenrad aan te bieden. Bedenk een oplossing die voor de kermisklant en de uitbater inzicht kan verschaffen tijdens het faciliteren van de gratis rondjes op het reuzenrad!

// je moet kunnen zien hoeveel rondjes hij/zij mag maken.
// je moet kunnen zien hoeveel rondjes hij/zij al heeft gemaakt.
// je moet kunnen zien hoeveel gratis rondjes hij/zij nog tegoed heeft.
//

// ================================================
// GRATIS 4 RONDJES MET HET REUZENRAD OP DE KERMIS!!!
// ================================================

let gratis_aantal_ritjes = 4;
let aantal_reeds_geweest = 0;
let stempelkaart = document.querySelector("#stempelkaart");

// Updater (Functie) om de kaart te updaten
function update_Stempelkaart() {
	let resterend = gratis_aantal_ritjes - aantal_reeds_geweest;

	if (aantal_reeds_geweest >= gratis_aantal_ritjes) {
		stempelkaart.innerHTML = `
      Je gratis ritjes zijn op! <br>
      Vraag een nieuwe stempelkaart!
    `;
	} else {
		stempelkaart.innerHTML = `
      Je hebt recht op ${gratis_aantal_ritjes} keer gaan! <br>
      ======================== <br> 
      Je bent reeds ${aantal_reeds_geweest} keer geweest! <br> 
      Je hebt nog ${resterend} keer te goed!<br>
    `;
	}
}

// Toon meteen de stempelkaart bij het laden
update_Stempelkaart();

// INPUT! Er wordt gestempeld!
document.querySelector(".stempelbutton").addEventListener("click", function () {
	aantal_reeds_geweest = aantal_reeds_geweest + 1; // 1 erbij!
	update_Stempelkaart(); // gewoon stempelkaart updaten!
});
