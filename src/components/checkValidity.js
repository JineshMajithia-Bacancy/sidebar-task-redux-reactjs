import { useState } from "react";

export const CheckValidity = (props) => {
  const [valName, setValName] = useState(false);
  const [valEmail, setValEmail] = useState(false);
  const [valPhone, setValPhone] = useState(false);
  const [valAddress, setValAddress] = useState(false);
  const [valWebsite, setValWebsite] = useState(false);

  if (props.type === "name") {
    let name = document.getElementById("name").value;
    if (/^[a-zA-Z\\s]*$/.test(name) && name.length > 0) {
      setValName(true);
    } else {
      setValName(false);
    }
  }
  if (props.type === "email") {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        document.getElementById("email").value
      )
    ) {
      setValEmail(true);
    } else {
      setValEmail(false);
    }
  }

  if (props.type === "phone") {
    let phone = document.getElementById("phone").value;
    if (/^(0|[1-9][0-9]*)$/.test(phone) && phone.length === 10) {
      setValPhone(true);
    } else {
      setValPhone(false);
    }
  }
  if (props.type === "address") {
    if (/[A-Za-z0-9'.\-\s,]/.test(document.getElementById("address").value)) {
      setValAddress(true);
    } else {
      setValAddress(false);
    }
  }
  if (props.type === "website") {
    if (
      props.type === "website" &&
      /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/.test(
        document.getElementById("website").value
      )
    ) {
      setValWebsite(true);
    } else {
      setValWebsite(false);
    }
  }

  if (valName && valEmail && valPhone && valAddress && valWebsite) {
    return false;
  } else {
    return true;
  }
};
export default CheckValidity;
