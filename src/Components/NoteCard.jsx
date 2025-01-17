import React from "react";
import NoteCardButton from "./NoteCardButton";

function NoteCardBody({ title, createdAt, body }) {
  return (
    <div className="noteCard-Body">
      <h3 className="noteCard-Body__Title">{title}</h3>
      <p className="noteCard-Body__CreateAt">{createdAt}</p>
      <p className="noteCard-Body__Body">{body}</p>
    </div>
  );
}

function NoteCard({
  id,
  title,
  body,
  createdAt,
  archived,
  onArchive,
  onDelete,
  onUnarchive,
}) {
  return (
    <div className="noteCard">
      <NoteCardBody title={title} createdAt={createdAt} body={body} />
      <NoteCardButton
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        archived={archived}
        onUnArchive={onUnarchive}
      />
    </div>
  );
}

export default NoteCard;
