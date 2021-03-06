import showNote from "./showNote.js";

// New Note Appending Function
export default function newNoteInNoteList(data) {
  const div = document.createElement("div");
  div.classList = "toast show mb-4";
  let newNote = `
            <div class="toast-header">
              <strong class="mr-auto">${
                data.title.slice(0, 20) + "..."
              }</strong>
              <small class="text-muted"
                >${data.timestamp}</small
              >
            </div>
            <div class="toast-body">
            ${data.content.replace(/(<([^>]+)>)/gi, "").slice(0, 60) + "..."}
            </div>
            <a href="note/${data.id}" id="${
    data.id
  }" class="stretched-link note"></a>
        `;
  div.innerHTML = newNote;

  return div;
}
