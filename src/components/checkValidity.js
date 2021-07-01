export const checkValidity = (type, input) => {
  switch (type) {
    case "text":
      if (/^[a-zA-Z\\s]*$/.test(input) && input.length > 0) {
        return true;
      } else {
        return false;
      }
    case "name":
      if (/^[a-zA-Z\\s]*$/.test(input) && input.length > 0) {
        return true;
      } else {
        return false;
      }
    case "email":
      if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          input
        ) &&
        input.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    case "phone":
      if (/^(0|[1-9][0-9]*)$/.test(input) && input.length === 10) {
        return true;
      } else {
        return false;
      }
    case "address":
      if (/[A-Za-z0-9'.\-\s,]/.test(input) && input.length > 0) {
        return true;
      } else {
        return false;
      }
    case "website":
      if (
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/.test(
          input
        ) &&
        input.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    default:
      alert("In default.");
      break;
  }
};
