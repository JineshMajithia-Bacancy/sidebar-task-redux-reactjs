const initialState = {
  list: [],
};
export default function reducer(state = initialState, action) {
  let list = [];
  let new_list = [];
  switch (action.type) {
    case "ADD":
      console.log("In Add");
      new_list = [
        ...state.list,
        {
          name: action.package.name,
          email: action.package.email,
          phone: action.package.phone,
          address: action.package.address,
          website: action.package.website,
        },
      ];
      list = new_list;
      return {
        list,
      };
    case "EDIT":
      console.log("In Edit");
      new_list = [...state.list];
      new_list[action.package.index] = {
        name: action.package.name,
        email: action.package.email,
        phone: action.package.phone,
        address: action.package.address,
        website: action.package.website,
      };
      list = new_list;
      return {
        list,
      };
    case "DELETE":
      console.log("In Delete");
      new_list = [...state.list];
      new_list.splice(action.index, 1);
      list = new_list;
      return {
        list,
      };
    default:
      console.log("In default of reducer.");
  }
  return state;
}
