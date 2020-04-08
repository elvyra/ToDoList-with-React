import React from "react";

import Table from "react-bootstrap/Table";

import DataRow from "../dataRow/DataRow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

export default function DataToTable({ data, ItemCheckedDone, ItemDeleteDone }) {
  let tableBody = data.map(item => (
    <DataRow
      key={item.id}
      item={item}
      ItemCheckedDone={ItemCheckedDone}
      ItemDeleteDone={ItemDeleteDone}
    />
  ));

  return (
    <Table hover responsive="md">
      <thead>
        <tr>
          <th>
            <FontAwesomeIcon icon={faChartBar} />
          </th>
          <th></th>
          <th>Subject</th>
          <th>Priority</th>
          <th>Due date</th>
          <th>Status</th>
          <th>Percent completed</th>
          <th>Modified on</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </Table>
  );
}
