import { FormEvent, useState } from "react";
import { NotesProps } from "../../../types/categories";

const NotesComponent: React.FC<NotesProps> = ({
  notes,
  onAddNote,
  onNoteClick,
}) => {
  const [currentNote, setCurrentNote] = useState("");

  const handleAddNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddNote(currentNote);
    setCurrentNote("");
  };

  return (
    <div className="bg-clay h-svh">
      {notes.map((note) => {
        return (
          <div key={note.time}>
            <span
              className="bg-plant cursor-pointer"
              onClick={() => onNoteClick(note.time)}>
              {note.formattedTime}
            </span>
            <span> Edit</span>
            <span> Delete</span>
            <p>{note.text}</p>
          </div>
        );
      })}

      <form onSubmit={handleAddNote}>
        <input
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}></input>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NotesComponent;
