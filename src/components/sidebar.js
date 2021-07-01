import React, { useState } from "react";
import Sidebar from "react-sidebar";
import { Button, Input } from "reactstrap";
import { ToastContainer } from "react-toastify";
import List from "./list";
import { toastify } from "./toastify";
import { confirm_alert } from "./confirmAlert";
import { connect } from "react-redux";
import { checkValidity } from "./checkValidity";
import Search from "./search";

const SidebarComp = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddDisabled, setIsAddDisabled] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState();
  const [valName, setValName] = useState(false);
  const [valEmail, setValEmail] = useState(false);
  const [valPhone, setValPhone] = useState(false);
  const [valAddress, setValAddress] = useState(false);
  const [valWebsite, setValWebsite] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [valSearch, setValSearch] = useState(false);
  const [searched_name, setSearchedName] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onChangeHandler = (type) => {
    if (type === "name") {
      let name = document.getElementById("name").value;
      if (checkValidity(type, name)) {
        setValName(true);
      } else {
        setValName(false);
      }
    }
    if (type === "email") {
      let email = document.getElementById("email").value;
      if (checkValidity(type, email)) {
        setValEmail(true);
      } else {
        setValEmail(false);
      }
    }
    if (type === "phone") {
      let phone = document.getElementById("phone").value;
      if (checkValidity(type, phone)) {
        setValPhone(true);
      } else {
        setValPhone(false);
      }
    }
    if (type === "address") {
      let address = document.getElementById("address").value;
      if (checkValidity(type, address)) {
        setValAddress(true);
      } else {
        setValAddress(false);
      }
    }
    if (type === "website") {
      let website = document.getElementById("website").value;
      if (checkValidity(type, website)) {
        setValWebsite(true);
      } else {
        setValWebsite(false);
      }
    }
    if (type === "text") {
      let search = document.getElementById("search").value;
      if (checkValidity(type, search)) {
        setValSearch(true);
      } else {
        setValSearch(false);
      }
    }
    if (valName && valEmail && valPhone && valAddress && valWebsite) {
      setIsAddDisabled(false);
    } else {
      setIsAddDisabled(true);
    }
  };

  const addValueHandler = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let website = document.getElementById("website").value;
    if (!isEdit) {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      document.getElementById("website").value = "";
      props.onAdd(name, email, phone, address, website);
      toggleSidebar();
      setIsAddDisabled(true);
      toastify("Value added successfully!", "success");
    } else {
      let newList = [...props.list];
      newList[index] = {
        key: props.list[index].key,
        name: name,
        email: email,
        phone: phone,
        address: address,
        website: website,
      };
      setIsSidebarOpen(false);
      setIsEdit(false);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      document.getElementById("website").value = "";
      props.onEdit(name, email, phone, address, website, index);
      setIsAddDisabled(true);
      toastify("Value edited successfully!", "edit");
    }
  };

  const deleteValueHandler = async (index) => {
    let result = await confirm_alert();
    if (result) {
      props.onDelete(index);
      toastify("Value deleted successfully!", "delete");
    } else {
    }
  };

  const editValueHandler = (index) => {
    setIsSidebarOpen(true);
    setIsEdit(true);
    setIndex(index);
    document.getElementById("name").value = props.list[index].name;
    document.getElementById("email").value = props.list[index].email;
    document.getElementById("phone").value = props.list[index].phone;
    document.getElementById("address").value = props.list[index].address;
    document.getElementById("website").value = props.list[index].website;
  };

  const toggleSearch = () => {
    if (props.list.length === 0) {
      toastify("List is empty.");
      document.getElementById("search").value = "";
    } else {
      setIsSearch(!isSearch);
      setSearchedName(document.getElementById("search").value);
      document.getElementById("search").value = "";
    }
  };

  const cancelSearch = () => {
    setIsSearch(!isSearch);
  };
  return (
    <div>
      <Sidebar
        sidebar={
          <div>
            <Input
              type="text"
              invalid={valName ? false : true}
              onChange={() => onChangeHandler("name")}
              id="name"
              placeholder="Name"
            />
            <Input
              invalid={valEmail ? false : true}
              type="text"
              onChange={() => onChangeHandler("email")}
              id="email"
              placeholder="Email"
            />
            <Input
              invalid={valPhone ? false : true}
              type="phone"
              onChange={() => onChangeHandler("phone")}
              id="phone"
              placeholder="Phone"
            />
            <Input
              invalid={valAddress ? false : true}
              type="textarea"
              onChange={() => onChangeHandler("address")}
              id="address"
              placeholder="Address"
            />
            <Input
              invalid={valWebsite ? false : true}
              type="text"
              onChange={() => onChangeHandler("website")}
              id="website"
              placeholder="Website"
            />
            <Button
              onClick={addValueHandler}
              disabled={isAddDisabled}
              color="danger"
              size="sm"
            >
              {isEdit ? "Change Value" : "Add Value"}
            </Button>
          </div>
        }
        open={isSidebarOpen}
        onSetOpen={toggleSidebar}
        styles={{ sidebar: { background: "white" } }}
      >
        <div align="left">
          <Input
            size="sm"
            type="text"
            id="search"
            placeholder="Enter search text here"
            invalid={valSearch ? false : true}
            onChange={() => onChangeHandler("text")}
          />
          <Button
            size="sm"
            outline
            color="warning"
            onClick={toggleSearch}
            disabled={!valSearch}
          >
            Search data in list using name
          </Button>
          <Button size="sm" outline color="danger" onClick={cancelSearch}>
            X
          </Button>
        </div>
        <div align="right">
          <Button size="sm" outline color="primary" onClick={toggleSidebar}>
            Open sidebar to add data
          </Button>
        </div>

        {isSearch ? (
          <Search
            searched_name={searched_name}
            list={props.list}
            deleteValueHandler={deleteValueHandler}
            editValueHandler={editValueHandler}
          />
        ) : (
          <List
            list={props.list}
            deleteValueHandler={deleteValueHandler}
            editValueHandler={editValueHandler}
          />
        )}
      </Sidebar>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSidebarDisabled: state.isSidebarDisabled,
    isAddDisabled: state.isAddDisabled,
    isEdit: state.isEdit,
    list: state.list,
    index: state.index,
  };
};

const madDispatchToProps = (dispatch) => {
  return {
    onDelete: (passed_index) =>
      dispatch({ type: "DELETE", index: passed_index }),

    onAdd: (
      passed_name,
      passed_email,
      passed_phone,
      passed_address,
      passed_website
    ) =>
      dispatch({
        type: "ADD",
        package: {
          name: passed_name,
          email: passed_email,
          phone: passed_phone,
          address: passed_address,
          website: passed_website,
        },
      }),

    onEdit: (
      passed_name,
      passed_email,
      passed_phone,
      passed_address,
      passed_website,
      passed_index
    ) =>
      dispatch({
        type: "EDIT",
        package: {
          name: passed_name,
          email: passed_email,
          phone: passed_phone,
          address: passed_address,
          website: passed_website,
          index: passed_index,
        },
      }),
  };
};

export default connect(mapStateToProps, madDispatchToProps)(SidebarComp);
