//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragInit(document.querySelector('#divdrag1'));
dragInit(document.querySelector('#divOfElementYouWantToDragAndResize');

function dragInit
(
 elemToDrag,
 elemToDragBy = null
)
{
 let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
 
 if(elemToDragBy == null){
    elemToDragBy = elemToDrag;
 }
  
  // the required css code to resize
 elemToDrag.style.overflow = 'auto';
 elemToDrag.style.position = 'absolute';
 elemToDrag.style.resize = 'both';
             
 elemToDragBy.style.cursor = 'grab';
     
 elemToDragBy.onmousedown =(e)=> {
    
        // see if the mouse cursor is at lower right corner
        // above the resize graphic, if so, set the variable
        // [currentlyResizing] to true
       let rectActiveElem = elemToDrag.getBoundingClientRect(),
           x = parseInt(e.clientX - rectActiveElem.left),
           y = parseInt(e.clientY - rectActiveElem.top),
           rightEdge = ((elemToDrag.offsetWidth - x) < 15),
           bottomEdge = ((elemToDrag.offsetHeight - y) < 15),
           currentlyResizing = (rightEdge && bottomEdge);
           
        // if [currentlyResizing]we don't want to
        // move [elemToDrag] we want to resize it
       if(!currentlyResizing){
            elemToDragBy.style.cursor = 'grabbing';
            e = (e || window.event);
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
             
             // stop dragging
            document.onmouseup =()=>  {
               document.onmouseup = null;
               document.onmousemove = null;
               elemToDragBy.style.cursor = 'grab';
            };

              // start dragging
            document.onmousemove =(e)=> {
               e = (e || window.event);
               e.preventDefault();
               pos1 = (pos3 - e.clientX);
               pos2 = (pos4 - e.clientY);
               pos3 = e.clientX;
               pos4 = e.clientY;
               elemToDrag.style.top = (elemToDrag.offsetTop - pos2) + "px";
               elemToDrag.style.left = (elemToDrag.offsetLeft - pos1) + "px";

            }; // document.onmousemove
        }; // !currentlyResizing
  }; // elemToDrag.onmousedown     
} // dragInit
