// variables
const text = document.getElementById("note");
const addNote = document.getElementById("add-note");
const output = document.getElementById("output");
const containerShow = document.getElementById("container-show");
const pNotes = document.getElementById("p-notes");


var initial = 0

// event listener
addNote.addEventListener("click", () =>{
	addNotes()
	
})

output.addEventListener("click",(event) =>{
	if (event.target.tagName === 'BUTTON') {
		containerShow.style.display = "block";
		 const button = event.target
		 const divOutput = button.parentNode
		 const pLast = divOutput.lastChild
		 const pValue = pLast.previousSibling
		 const pValue2 = pValue.textContent
		 
		 pNotes.innerHTML = pValue2
		 
		

	}
})

containerShow.addEventListener("click", (event)=>{
	if (event.target.tagName === 'I') {
		containerShow.style.display = "none"
	}
})


// output functions
function addNotes(){
	const textValue = text.value
    

    initial=initial+1

	if (textValue.length >= 30) {
		
		const cutNote = textValue.slice(0,30);
		const textNote = cutNote + "..." 
		const div = `<div class="note-div">
			<h3>Note ${initial}</h3>
			<p>${textNote}</p>
			<button class="view-detail">View Detail</button>
			<h4 class="oculto">${textValue}</h4>
		    </div>`
    output.innerHTML += div
    
	}else{
		
		const div2 = `<div class="note-div">
			<h3>Note ${initial}</h3>
			<p>${textValue}</p>
			<button class="view-detail">View Detail</button>
			<h4 class="oculto">${textValue}</h4>
		    </div>`
    output.innerHTML += div2
	}
	return textValue
}





