console.log("Conso calculs...");

btnCalcConso = document.querySelector("#btn-calc-conso");
consoForm = document.querySelector("#conso")

let prix_carburant = 0
let kilometrages = [0]
let recharges_carburant = [0]

let init = false

const prix_output = document.querySelector("#prix")
const recharge_output = document.querySelector("#recharge")
const kilom_output = document.querySelector("#kilometrage")

console.log('log encore...');

consoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    init = true;
    const kilom_actuel = consoForm.kilom_actuel.value
    kilometrages.unshift(kilom_actuel)
    const val_carburant = consoForm.val_carburant.value 
    if (prix_carburant != val_carburant) {
        prix_carburant = val_carburant
        if (prix_carburant > val_carburant) {
            message = "Le carburant a baissé."
        } else {
            message = "Le carburant a augmenté."
        }
    } else {
        message = "Le carburant est stable/"
    }
    const vol_carburant = consoForm.vol_carburant.value
    recharges_carburant.unshift(vol_carburant)

    consoForm.val_carburant.value = prix_carburant
    consoForm.vol_carburant.value = recharges_carburant[0]
    consoForm.kilom_actuel.value = kilometrages[0]

    prix_output.innerHTML = prix_carburant
    kilom_output.innerHTML = kilometrages[0]
    recharge_output.innerHTML = recharges_carburant[0]

    console.log(recharges_carburant, kilometrages);
})