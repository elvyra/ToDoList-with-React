import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Search({ data, text, handleSearch }) {
  const [dataList, setDataList] = useState(data);
  const [searchText, setSearchText] = useState(text);

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(searchText);
  }

  function handleChange(e) {
    setDataList(
      data.filter(item =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setSearchText(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit} className="my-5">
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Subject:</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          placeholder="text to search for"
          defaultValue={text}
          name="search"
          list="searchList"
          onChange={handleChange}
        />
        <datalist id="searchList">
          {dataList.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </datalist>
        <div className="input-group-append">
          <Button variant="primary" type="submit">
            Search
          </Button>
        </div>
      </InputGroup>
    </Form>
  );
}
