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

function NoteCardButton({ id, onDelete, onArchive }) {
  return (
    <div className="notecard-button" id="NoteCard-Button">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} />
    </div>
  );
}

export default NoteCardButton;
