
let vacationCalc = document.getElementById('vacationCalc')

	vacationCalc.addEventListener('submit', calcExpenses)

function calcExpenses(e){
	e.preventDefault();

	let origen = document.getElementById('origen').value,
		destino = document.getElementById('destino').value,
		km = document.getElementById('km').value;
	
	balance = km * 0.40;
	
	UI(origen, destino, balance)

}

function UI(origen, destino, balance){
	let result = document.getElementById('result')
	let dataPrint = document.createElement('div')

	dataPrint.innerHTML = `
		<div class="container-data row">
			<div class="col s4">
				<h6>${origen}</h6>
			</div>		
			<div class="col s4">
				<h6>${destino} </h6>
			</div>
			<div class="col s4">	
				<h6>${balance} </h6>
			</div>
		</div>
	`
	result.appendChild(dataPrint)

	reset();

}

function reset() {
	document.getElementById('vacationCalc').reset()
}
