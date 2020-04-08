import React from "react";
import "./CustomCheckbox.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function CustomCheckbox({ done, id, ItemCheckedDone }) {
  function handleChange(e) {
    if (e.target.checked) ItemCheckedDone(id);
  }

  return (
    <div className="checkboxContainer">
      <input
        type="checkbox"
        name="done"
        checked={done}
        onChange={handleChange}
      />
      <span className="checkbox-custom">
        <FontAwesomeIcon icon={faCheck} />
      </span>
    </div>
  );
}
