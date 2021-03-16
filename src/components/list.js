import React from "react";
import { Table, Button, Alert } from "reactstrap";

const List = (props) => {
  if (props.list.length === 0) {
    return (
      <div>
        <Alert color="danger">No data to display!</Alert>
      </div>
    );
  } else {
    const display_list = props.list.map((element, index) => {
      return (
        <tr key={Math.random()}>
          <td>{element.name}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.address}</td>
          <td>{element.website}</td>
          <td>
            <Button
              color="danger"
              onClick={() => props.deleteValueHandler(index)}
            >
              Delete
            </Button>
            <Button
              color="primary"
              onClick={() => props.editValueHandler(index)}
            >
              Edit
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <Table bordered>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Address</td>
            <td>Website</td>
            <td>Delete and Edit</td>
          </tr>
          {display_list}
        </tbody>
      </Table>
    );
  }
};

export default List;
