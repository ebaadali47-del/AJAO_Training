const { useState } = React;

function Header() {
  return (
    <header className="app-header">
      <h1>My Notes</h1>
    </header>
  );
}

function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddNote(text);
    setText("");
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">Add</button>
    </form>
  );
}

function Note({ note, onDelete }) {
  return (
    <div className="note-card">
      <p>{note.text}</p>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <p className="empty-msg">No notes yet. Add one above.</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(text) {
    const newNote = {
      id: Date.now(),
      text: text,
    };
    setNotes([newNote, ...notes]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
