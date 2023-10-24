const textRow = [
	`Проекты JavaScript`
]

function run() {

	let count = 0
	let line = 0
	let out = ''

	let row = document.getElementById('run-row')

	function rowOut() {
		let interval = setTimeout( function() {
			
		
			out += textRow[line][count]
			row.innerText = out + '|'
			count++

			if (count >= textRow[line].length) {
				count = 0
				line++
				if (line == textRow.length) {
					clearTimeout(interval)
					row.innerText = out
					return true
				}

			}

			rowOut()	
		}, 140);
	}
	rowOut()
}
run()