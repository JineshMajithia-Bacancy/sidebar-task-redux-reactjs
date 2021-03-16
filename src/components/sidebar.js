import React, { useState } from "react";
import Sidebar from "react-sidebar";
import { Button, Input } from "reactstrap";
import { ToastContainer } from "react-toastify";
import List from "./list";
import { toastify } from "./toastify";
import { confirm_alert } from "./confirmAlert";
import { connect } from "react-redux";

const SidebarComp = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddDisabled, setIsAddDisabled] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onChangeHandler = () => {
    if (
      document.getElementById("name").value !== "" &&
      document.getElementById("email").value !== "" &&
      document.getElementById("phone").value !== "" &&
      document.getElementById("address").value !== "" &&
      document.getElementById("website").value !== ""
    ) {
      setIsAddDisabled(false);
    } else {
      setIsAddDisabled(true);
    }
  };

  const addValueHandler = () => {
    if (!isEdit) {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let address = document.getElementById("address").value;
      let website = document.getElementById("website").value;
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      document.getElementById("website").value = "";
      toggleSidebar();
      setIsAddDisabled(true);
      toastify("Value added successfully!", "success");
      props.onAdd(name, email, phone, address, website);
    } else {
      let newList = [...props.list];
      newList[index] = {
        key: props.list[index].key,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        website: document.getElementById("website").value,
      };
      setIsSidebarOpen(false);
      setIsEdit(false);
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let address = document.getElementById("address").value;
      let website = document.getElementById("website").value;
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      document.getElementById("website").value = "";
      setIsAddDisabled(true);
      toastify("Value edited successfully!", "edit");
      props.onEdit(name, email, phone, address, website, index);
    }
  };

  const deleteValueHandler = async (index) => {
    let result = await confirm_alert();
    if (result) {
      toastify("Value deleted successfully!", "delete");
      props.onDelete(index);
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

  return (
    <div>
      <Sidebar
        sidebar={
          <div>
            <Input
              onChange={() => onChangeHandler()}
              id="name"
              placeholder="Name"
            />
            <Input
              onChange={() => onChangeHandler()}
              id="email"
              placeholder="Email"
            />
            <Input
              onChange={() => onChangeHandler()}
              id="phone"
              placeholder="Phone"
            />
            <Input
              onChange={() => onChangeHandler()}
              id="address"
              placeholder="Address"
            />
            <Input
              onChange={() => onChangeHandler()}
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
        <Button outline color="primary" onClick={toggleSidebar}>
          Open sidebar to add data
        </Button>
        <List
          list={props.list}
          deleteValueHandler={deleteValueHandler}
          editValueHandler={editValueHandler}
        />
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
