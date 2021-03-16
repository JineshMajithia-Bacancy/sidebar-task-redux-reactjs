import confirm from "reactstrap-confirm";

export const confirm_alert = () => {
  return confirm({
    title: (
      <>
        <strong>Confirm Delete</strong>
      </>
    ),
    message: "Are you sure ?",
    confirmText: "Delete",
    confirmColor: "danger",
    cancelColor: "text-danger",
  });
};
