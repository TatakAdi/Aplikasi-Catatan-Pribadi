import React from "react";
import NoteCardList from "./NoteCardList";
import { getInitialData } from "../utils";

class PersonalNoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <div className="PersonalNote-App">
        <h1>Aplikasi Catatan Pribadi</h1>
        <NoteCardList notes={this.state.notes} />
      </div>
    );
  }
}

export default PersonalNoteApp;
