import React from "react";
import NoteCardList from "./NoteCardList";
import { getInitialData } from "../utils";

class PersonalNoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  onArchiveHandler(id) {
    const noteIndex = this.state.notes.findIndex((note) => note.id === id);

    if (noteIndex !== -1) {
      const updatedNotes = [...this.state.notes];
      updatedNotes[noteIndex] = {
        ...updatedNotes[noteIndex],
        archived: true,
      };

      this.setState({ notes: updatedNotes });
    }
  }
  onUnarchiveHandler(id) {
    const noteIndex = this.state.notes.findIndex((note) => note.id === id);

    if (noteIndex !== -1) {
      const updatedNotes = [...this.state.notes];
      updatedNotes[noteIndex] = {
        ...updatedNotes[noteIndex],
        archived: false,
      };

      this.setState({ notes: updatedNotes });
    }
  }

  render() {
    return (
      <div className="PersonalNote-App">
        <h1>Aplikasi Catatan Pribadi</h1>
        <NoteCardList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
      </div>
    );
  }
}

export default PersonalNoteApp;
