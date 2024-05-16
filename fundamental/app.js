class NotesApp extends HTMLElement {
    constructor() {
      super();
      this.notesData = [
      ];
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          /* CSS styles go here */
        </style>
        <div class="app-container">
          <h1>My Notes</h1>
          <form id="addNoteForm">
            <label for="noteTitle">Title:</label>
            <input type="text" id="noteTitle" required>
            <label for="noteBody">Body:</label>
            <textarea id="noteBody" required></textarea>
            <button type="submit">Add Note</button>
          </form>
          <div class="notes-list">
            ${this.notesData.map(note => this.renderNoteItem(note)).join('')}
          </div>
        </div>
      `;
      this.shadowRoot.querySelector('#addNoteForm').addEventListener('submit', this.addNote.bind(this));
    }
  
    renderNoteItem(note) {
      return `
        <div class="note-item">
          <h2>${note.title}</h2>
          <p>${note.body}</p>
          <small>${new Date(note.createdAt).toLocaleString()}</small>
        </div>
      `;
    }
  
    addNote(event) {
      event.preventDefault();
      const titleInput = this.shadowRoot.querySelector('#noteTitle');
      const bodyInput = this.shadowRoot.querySelector('#noteBody');
  
      if (titleInput.value && bodyInput.value) {
        const newNote = {
          id: `notes-${Date.now()}`,
          title: titleInput.value,
          body: bodyInput.value,
          createdAt: new Date().toISOString(),
          archived: false,
        };
  
        this.notesData.push(newNote);
        this.render();
        titleInput.value = '';
        bodyInput.value = '';
      }
    }
  }
  
  customElements.define('notes-app', NotesApp);
  