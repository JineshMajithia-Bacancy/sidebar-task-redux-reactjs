import React from "react";
import List from "./list";

const Search = (props) => {
  let new_list = [];
  props.list.map((element) => {
    if (element.name === props.searched_name) {
      new_list = [...new_list, element];
    }
    return null;
  });

  return (
    <List
      list={new_list}
      deleteValueHandler={props.deleteValueHandler}
      editValueHandler={props.editValueHandler}
    />
  );
};

export default Search;
