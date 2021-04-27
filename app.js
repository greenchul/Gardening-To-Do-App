console.log("plant app connected");




function onDragStart(event){
  // console.log(event.dataTransfer.dropEffect);
  // console.log(event.dataTransfer.effectAllowed);
  event.dataTransfer.setData('text/plain', event.target.id);
  
 
  event.currentTarget.classList.add("moving")

  
}

function onDragOver(event){
    event.preventDefault();
    
}

function onDrop(event){
  const id = event.dataTransfer.getData("text");
  const movingButton = document.getElementById(id).cloneNode(true);
  const dropZone = event.target;
  movingButton.classList.remove("moving");
  dropZone.appendChild(movingButton);
  event.dataTransfer.clearData();

  // loop through html elements in target dropzone
  let htmlElements = event.target.children;
 
  for(let i=1; i<htmlElements.length; i++){
    // console.log(htmlElements[i].children)
    htmlElements[i].addEventListener("dblclick", function(){
      console.log("dblclick", htmlElements[i].classList)
      htmlElements[i].classList.add("btn-click")
      
    })
    let span = htmlElements[i].children[0];
    // console.log(span.classList);
    span.classList.remove("delete")
    span.addEventListener("click", function(event){
      console.log("REMOVE ME")
      console.log(event.target.parentNode.parentNode)
      event.target.parentNode.parentNode.remove();
    })
    
  }
}

