import React from "react";
import "./RangeInput.scss";

import Form from "react-bootstrap/Form";

export default function RangeInput({ percents, onChanged }) {
  return (
    <Form.Control
      type="range"
      name="percent"
      min="0"
      max="100"
      value={percents}
      onChange={e => onChanged(e.target.value)}
    />
  );
}
