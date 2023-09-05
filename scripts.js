/**
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


const handleDragStart = (event) => {}
const handleDragEnd = (event) => {}

const handleHelpToggle = (event) => {
    const helpDialog = document.querySelector('[data-help-overlay]');
    helpDialog.show()
    const closeButton=document.querySelector("[data-help-cancel]") 
    if (closeButton){
      
    }
         }
const helpButton = document.querySelector('.help');
helpButton.addEventListener('click', handleHelpToggle)
window.addEventListener('click',handleHelpToggle)


/*const helpDialog = document.querySelector('[data-help-overlay]');
const h2 = helpDialog.querySelector("h2.overlay__title")
const p =helpDialog.querySelector("p  strong ")*/
  


const handleAddToggle = (event) => {
const addButton= window.document.querySelector (' .button_primary')
addButton.focus()
}

window.addEventListener('click', handleAddToggle())



/*const handleAddSubmit = (event) => {}
const handleEditToggle = (event) => {}
const handleEditSubmit = (event) => {}
const handleDelete = (event) => {}*/

  

    

 
/*
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)*/

/*for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)} */
