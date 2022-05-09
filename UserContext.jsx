import React from "react";

export const UserContext = React.createContext(null);

const UserContextProvider = (props) => {
  return (
    <UserContext.Provider
      value={{
        users: [
          {
            name: "Sample1",
            email: "sample1@mit.edu",
            password: "secret123",
            balance: 100,
          },
          {
            name: "Sample2",
            email: "sample2@mit.edu",
            password: "secret123",
            balance: 100,
          },
        ],
        loggedIn: {
          name: "",
          email: "",
          index: null,
          status: false,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
