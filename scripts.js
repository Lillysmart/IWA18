import { html } from "./view.js";
import { createOrderHtml } from "./view.js";
import { updateDraggingHtml } from "./view.js";

/** must use a path propety 
 * if an element with a area , is clicked ,it should take the html
 * import updatedragging , state ,updatehtml, createorderData from data.js
 * importcreateOrder ,updateDraggingHtml, movetocolumn  from view.js
 * 
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

// setting the source
const handleDragStart = (event) => {}

//updating the column , in the state object , until the user stops dragging
//what kind of loop is suitable in the path 
//how to check if an element has a data area attritube and what to do after it finds
const handleDragEnd = (event) => {}


const helpOverlay = document.querySelector('[data-help-overlay]');
const handleHelpToggle = (event) => {
    //preventDefault()
    helpOverlay.show()
     
  
    }
         
const helpButton = document.querySelector('.help');
helpButton.addEventListener('click', handleHelpToggle)
helpButton.addEventListener('click',handleHelpToggle)

const closeButton=document.querySelector("[data-help-cancel]")

const handlehelpclose =(event)=>{
    helpOverlay.close();
}
closeButton.addEventListener("click",handlehelpclose)


const addButton= document.querySelector (' .button_primary')
const addOverlay =document.querySelector('[data-add-overlay]')
const handleAddToggle = (event) => {
addButton.focus()
addOverlay.show()
}


addButton.addEventListener('click', handleAddToggle)
console.log (html)

/*const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}*/

  

    

 
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)} 
