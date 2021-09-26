import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
import { mobile } from "../../responsive";

const List = ({
  name,
  setName,
  isEditing,
  handleSubmit,
  list,
  editItem,
  removeItem,
  emptyList,
}) => {
  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="e.g. pork"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
          <Button type="submit">{isEditing ? "Edit" : "Submit"}</Button>
        </Form>
      </FormWrapper>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <ListItem key={id}>
            <Name>{title}</Name>
            <Operation>
              <Edit type="button" onClick={() => editItem(id)}>
                <FaEdit />
              </Edit>
              <Delete type="button" onClick={() => removeItem(id)}>
                <FaTrash />
              </Delete>
            </Operation>
          </ListItem>
        );
      })}
      {list.length > 0 && (
        <ClearWrapper>
          <Clear onClick={emptyList}>Clear Items</Clear>
        </ClearWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: calc(100% - 100px);
  margin-top: 10px;

  ${mobile({
    width: "100%",
    marginTop: "20px"
  })}
`;

const FormWrapper = styled.div``;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  flex: 4;
  font-size: 20px;
  padding: 10px 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-color: transparent;

  ${mobile({
    padding: "5px 10px"
  })}
`;

const Button = styled.button`
  flex: 1;
  font-size: 26px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${mobile({
    fontSize: "16px"
  })}
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;

  ${mobile({
    margin: "0 10px",
  })}
`;

const Operation = styled.div``;

const Name = styled.p`
  text-transform: capitalize;
  font-size: 20px;

  ${mobile({
    fontSize: "16px"
  })}
`;

const Edit = styled.button`
  background: transparent;
  border: none;
  margin-right: 10px;
  padding: 0;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    opacity: 0.8;
  }

  ${mobile({
    fontSize: "14px",
  })}
`;

const Delete = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    opacity: 0.8;
  }

  ${mobile({
    fontSize: "14px",
  })}
`;

const ClearWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Clear = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    opacity: 0.8;
  }

  ${mobile({
    fontSize: "18px",
  })}
`;
export default List;
