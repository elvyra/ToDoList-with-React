import React from "react";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import CustomCheckbox from "../customCheckbox/CustomCheckbox";

import "./DataRow.scss";

export default function DataRow({ item, ItemCheckedDone, ItemDeleteDone }) {
  function DeleteItem(e) {
    ItemDeleteDone(e.currentTarget.id);
  }

  return (
    <tr>
      <td>
        <FontAwesomeIcon
          icon={item.icon === "faGem" ? faGem : faCheckSquare}
          className="icon"
        />
      </td>
      <td>
        <CustomCheckbox
          done={item.percentCompleted === 100 ? true : false}
          id={item.id}
          ItemCheckedDone={ItemCheckedDone}
        />
      </td>
      <td className={item.percentCompleted === 100 ? "done" : ""}>
        {item.subject}
      </td>
      <td>
        <Badge pill variant="primary" priority={item.priority}>
          {item.priority === 0
            ? "Low"
            : item.priority === 1
            ? "Normal"
            : "High"}
        </Badge>
      </td>
      <td>{item.duteDate}</td>
      <td>
        {item.percentCompleted === 0
          ? "New"
          : item.percentCompleted === 100
          ? "Completed"
          : "In progress"}
      </td>
      <td className="d-flex flex-row">
        <div className="fixedWidth">{item.percentCompleted}%</div>
        <ProgressBar
          className="flex-grow-1 flex-shrink-1 mt-1"
          now={item.percentCompleted}
          label={`${item.percentCompleted}%`}
          srOnly
        />
      </td>
      <td>{item.modifiedOn}</td>
      <td>
        <Button
          variant="outline-danger"
          className="border-none"
          onClick={DeleteItem}
          id={item.id}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </tr>
  );
}
