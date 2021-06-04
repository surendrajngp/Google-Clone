import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStateValue } from "../Data/StateProvider";
import { actionTypes } from "../Data/reducer";

const Search = ({ hidenButtons = false }) => {
  // Dispatcher

  const [{}, dispatch] = useStateValue();
  // Search Input
  const [input, setInput] = useState("");

  //   Search History
  const history = useHistory();

  //   Search Trigger
  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    // redirect to searh page after hitting enter
    history.push("/search");
  };

  return (
    <form className="Search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input
          type="text"
          placeholder="Search Google or type a URL"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon className="search_voiceIcon" />
      </div>

      {/* Hide Buttons if props condition  is true */}
      {!hidenButtons ? (
        <div className="search_buttons">
          <Button variant="outlined" type="submit" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="hidden_search_buttons">
          <Button variant="outlined" type="submit" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
