import React from "react";

function ArchiveButton({ id, onArchive }) {
  return (
    <button
      className="archive-button button"
      id="NoteCard-Button__archive"
      onClick={() => onArchive(id)}
    >
      Arsipkan
    </button>
  );
}

function UnarchiveButton({ id, onUnarchive }) {
  return (
    <button
      className="archive-button button"
      id="NoteCard-Button__unArchive"
      onClick={() => onUnarchive(id)}
    >
      Pindahkan
    </button>
  );
}

function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="delete-button button"
      id="NoteCard-Button__delete"
      onClick={() => onDelete(id)}
    >
      Hapus
    </button>
  );
}

function NoteCardButton({ id, archived, onDelete, onArchive, onUnarchive }) {
  return (
    <div className="notecard-button" id="NoteCard-Button">
      <DeleteButton id={id} onDelete={onDelete} />
      {!archived ? (
        <ArchiveButton id={id} onArchive={onArchive} />
      ) : (
        <UnarchiveButton id={id} onUnarchive={onUnarchive} />
      )}
    </div>
  );
}

export default NoteCardButton;
