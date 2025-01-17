import React from "react";
import NoteCard from "./NoteCard";

function NoteCardListVisible({ notes, id, onArchive, onDelete }) {
  return (
    <div className="NoteCardList-Visible">
      <h2 className="NoteCardList-Title">Catatan Aktif</h2>
      <div className="NoteCardList">
        {notes
          .filter((note) => !note.archived)
          .map((note) => (
            <NoteCard
              key={note.id}
              id={id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            />
          ))}
      </div>
    </div>
  );
}

function NoteCardListArchived({ notes, id, onArchive, onDelete }) {
  return (
    <div className="NoteCardList-Archived">
      <h2 className="NoteCardList-Title">Arsip</h2>
      <div className="NoteCardList">
        {notes
          .filter((note) => note.archived)
          .map((note) => (
            <NoteCard
              key={note.id}
              id={id}
              onArchive={onArchive}
              onDelete={onDelete}
              {...note}
            />
          ))}
      </div>
    </div>
  );
}

function NoteCardList({ notes, onArchive, onDelete }) {
  return (
    <div className="NoteList">
      <NoteCardListVisible
        notes={notes}
        onArchive={onArchive}
        onDelete={onDelete}
      />
      <NoteCardListArchived
        notes={notes}
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </div>
  );
}

export default NoteCardList;
