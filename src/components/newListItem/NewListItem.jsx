import React, { useState } from "react";
import "./NewListItem.scss";

import RangeInput from "../rangeInput/RangeInput";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function NewListItem({ NewItemPush }) {
  const [percents, setPercents] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    let newItem = {
      icon:
        event.currentTarget.icon.value === 0
          ? "faCheckSquare"
          : event.currentTarget.icon.value,
      subject:
        event.currentTarget.subject.value.length > 0
          ? event.currentTarget.subject.value
          : "(no subject)",
      priority:
        event.currentTarget.priority.value < 0
          ? 0
          : event.currentTarget.priority.value > 2
          ? 2
          : event.currentTarget.priority.value,
      duteDate: event.currentTarget.dueDate.value,
      percentCompleted:
        !isNaN(event.currentTarget.percent.value) &&
        event.currentTarget.percent.value.length > 0
          ? event.currentTarget.percent.value >= 0 &&
            event.currentTarget.percent.value <= 100
            ? event.currentTarget.percent.value
            : 0
          : 0,
      modifiedOn: new Date().toLocaleString()
    };
    NewItemPush(newItem);
  }

  return (
    <Form onSubmit={handleSubmit} className="my-5">
      <Form.Row>
        <Form.Group as={Col} md="3">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Icon </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control as="select" name="icon">
              <option value="faGem">Gem</option>
              <option value="faCheckSquare">Check</option>
            </Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="9">
          <Form.Control type="text" placeholder="Subject" name="subject" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="3">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">Priority</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control as="select" name="priority">
              <option value={0}>Low</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </Form.Control>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Control type="text" placeholder="Due date" name="dueDate" />
        </Form.Group>
        <Form.Group
          as={Col}
          md="4"
          className="d-flex flex-row align-items-center"
        >
          <div className="fixedWidth">{percents}%</div>
          <RangeInput
            className="flex-grow-1 flex-shrink-1 mt-1"
            percents={percents}
            onChanged={newValue => setPercents(newValue)}
          />
        </Form.Group>
        <Form.Group
          as={Col}
          md="2"
          className="d-flex flex-row align-items-center"
        >
          <Button variant="primary" type="submit" className="w-100">
            Enter new item
          </Button>
        </Form.Group>
      </Form.Row>
    </Form>
  );
}
