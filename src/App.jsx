import { useState, useEffect } from "react";
import styled from "styled-components";
import Alert from "./components/Alert";
import List from "./components/List";
import { mobile } from "./responsive";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [list, setList] = useState(getLocalStorage());
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [redAlert, setRedAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert("Please Enter Value!");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert("Value Changed");
    } else {
      showAlert("Item Added To The List");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (msg) => {
    setIsAlert(true);
    setAlert(msg);
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  const removeItem = (id) => {
    const c = window.confirm("Are you sure to remove the item?");
    if (c) {
      setRedAlert(true);
      showAlert("Item Removed");
      setList(list.filter((item) => item.id !== id));
    } else {
      return;
    }
  };

  const emptyList = () => {
    const c = window.confirm("Are you sure to empty the list?");
    if (c) {
      setRedAlert(true);
      showAlert("Empty List");
      setList([]);
    } else {
      return;
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlert(false);
      setRedAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <Container>
      <Wrapper>
        <Title>Shopping List</Title>
        <Alert
          alert={alert}
          isAlert={isAlert}
          setIsAlert={setIsAlert}
          redAlert={redAlert}
        ></Alert>
        <List
          name={name}
          setName={setName}
          isEditing={isEditing}
          handleSubmit={handleSubmit}
          list={list}
          editItem={editItem}
          removeItem={removeItem}
          emptyList={emptyList}
        ></List>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  margin-top: 100px;
  position: relative;
  padding: 0 50px;
  border-radius: 10px;

  ${mobile({
    width: "100%",
    marginTop: "20px",
    padding: 0,
    margin: "0 10px",
  })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;

  ${mobile({
    fontSize: "30px",
  })}
`;

export default App;
