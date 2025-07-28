import React, { useState, useEffect } from 'react';
import '../App.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');
  const [filter, setFilter] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editNote, setEditNote] = useState('');

  // Load notes from local storage on initial render
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add new note
  const handleAddNote = () => {
    if (note.trim() === '') return;
    setNotes([...notes, note.trim()]);
    setNote('');
  };

  // Delete a note
  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Edit a note
  const handleEditNote = (index) => {
    setEditIndex(index);
    setEditNote(notes[index]);
  };

  // Save edited note
  const handleSaveEdit = () => {
    if (editNote.trim() === '') return;
    const updatedNotes = [...notes];
    updatedNotes[editIndex] = editNote.trim();
    setNotes(updatedNotes);
    setEditIndex(null);
    setEditNote('');
  };

  // Filter notes
  const filteredNotes = notes.filter(n =>
    n.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>📝 Notes App</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Add a new  note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search notes..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredNotes.map((n, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editNote}
                  onChange={(e) => setEditNote(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {n}
                <button style={{ marginLeft: '1rem' }} onClick={() => handleEditNote(index)}>Edit</button>
                <button style={{ marginLeft: '0.5rem' }} onClick={() => handleDeleteNote(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesApp;
