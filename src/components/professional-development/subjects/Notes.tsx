import { useState } from "react";
import { NotesProps } from "../../../types/categories";

const NotesComponent: React.FC<NotesProps> = ({
  notes,
  onAddNote,
  onNoteClick,
}) => {
  const [currentNote, setCurrentNote] = useState("");

  const handleAddNote = () => {
    onAddNote(currentNote);
    setCurrentNote("");
  };
  return (
    <div className="bg-gold">
      {notes.map((note) => {
        return (
          <>
            <li onClick={() => onNoteClick(note.time)}>
              {note.time} / {note.text}
            </li>
          </>
        );
      })}
      <button onClick={handleAddNote}>Add Note</button>
      <textarea
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}></textarea>
    </div>
  );
};

export default NotesComponent;
