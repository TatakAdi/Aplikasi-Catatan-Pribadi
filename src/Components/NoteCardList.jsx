import React from "react";
import NoteCard from "./NoteCard";

function NoteCardListVisible({ notes, id, onArchive, onUnarchive, onDelete }) {
  return (
    <div className="NoteCardList-Visible">
      <h2 className="NoteCardList-Title">Catatan Aktif</h2>
      <div className="NoteCardList">
        {notes.filter((note) => !note.archived).length !== 0 ? (
          notes
            .filter((note) => !note.archived)
            .map((note) => (
              <NoteCard
                key={note.id}
                id={id}
                onArchive={onArchive}
                onDelete={onDelete}
                {...note}
              />
            ))
        ) : (
          <p>Tidak ada catatan</p>
        )}
      </div>
    </div>
  );
}

function NoteCardListArchived({ notes, id, onArchive, onUnarchive, onDelete }) {
  return (
    <div className="NoteCardList-Archived">
      <h2 className="NoteCardList-Title">Arsip</h2>
      <div className="NoteCardList">
        {notes.filter((note) => note.archived).length !== 0 ? (
          notes
            .filter((note) => note.archived)
            .map((note) => (
              <NoteCard
                key={note.id}
                id={id}
                onUnarchive={onUnarchive}
                onDelete={onDelete}
                {...note}
              />
            ))
        ) : (
          <p>Tidak Ada Catatan</p>
        )}
      </div>
    </div>
  );
}

function NoteCardList({ notes, onArchive, onUnarchive, onDelete }) {
  return (
    <div className="NoteList">
      <NoteCardListVisible
        notes={notes}
        onArchive={onArchive}
        onDelete={onDelete}
      />
      <NoteCardListArchived
        notes={notes}
        onUnarchive={onUnarchive}
        onDelete={onDelete}
      />
    </div>
  );
}

export default NoteCardList;
