class Question {
	static create(question) {
		return fetch('https://portfolio-96611-default-rtdb.europe-west1.firebasedatabase.app/questions.json', {
			method: 'POST',
			body: JSON.stringify(question),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(response => {
				question.id = response.name
				return question
			})
			.then(addToLocalStorage)
			.then(Question.renderList)

	}
	static renderList() {
		const questions = getQuestionsFromLocalStorage()
		const html = questions.length
			? questions.map(toCard).join('')
			: `<div class="err-com">Коментариев нет</div>`

		const list = document.getElementById('com-list')
		list.innerHTML = html
	}

}

function addToLocalStorage(question) {
	const all = getQuestionsFromLocalStorage()
	all.push(question)
	localStorage.setItem('questions', JSON.stringify(all))
}
function getQuestionsFromLocalStorage() {
	return JSON.parse(localStorage.getItem('questions') || '[]')
}
function toCard(question) {
	return `
	
	<div class="coment-item">
		<div class="coment-body">${question.text}</div>
		<div class="coment-date">${new Date(question.date).toLocaleDateString()}</div>
	</div>
	`
}

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
	submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
	event.preventDefault()
	if (isValid(input.value)) {
		const question = {
			text: input.value.trim(),
			date: new Date().toJSON(),

		}
		submitBtn.disabled = true
		Question.create(question).then(() => {
			input.value = ''
			submitBtn.disabled = false
		})

	}
}

function isValid(value) {
	return value.length >= 10
}