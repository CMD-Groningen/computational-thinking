// ================================================
// GRATIS RONDJES MET HET REUZENRAD OP DE KERMIS!!!
// ================================================

// variabelen bij aanvang!

let gratis_aantal_ritjes = 4;
let aantal_reeds_geweest = 0;
let stempelkaart = document.querySelector("#stempelkaart");

// "loop" voor bijhouden rondjes op de stempelkaart!

for (let stempels = 1; stempels < gratis_aantal_ritjes; stempels++) {
	stempelkaart.innerHTML = `
	Je hebt recht op ${gratis_aantal_ritjes} keer gaan! <br>
	 ======================== <br> 
	Je bent reeds ${aantal_reeds_geweest} keer geweest! <br> 
	Je hebt nog ${stempels - aantal_reeds_geweest + 1} keer te goed!<br>`;
}

// Opdracht om computational thinking te oefenen.
// CASUS: GRATIS RONDJES MET HET REUZENRAD OP DE KERMIS!!!
// Een kermis uitbater bedenkt een actie om kermisklanten gratis ritjes op het reuzenrad aan te bieden. Bedenk een oplossing die voor de kermisklant en de uitbater inzicht kan verschaffen tijdens het faciliteren van de gratis rondjes op het reuzenrad!

//
