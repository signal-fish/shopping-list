import styled from "styled-components";
import { mobile } from "../../responsive";

const Alert = ({ alert, isAlert, redAlert }) => {
  return (
    <Container>{isAlert && <Text redAlert={redAlert}>{alert}</Text>}</Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 60px;
  width: calc(100% - 100px);

  ${mobile({
    top: "45px",
    width: "100%"
  })}
`;

const Text = styled.p`
  background: ${(props) => (props.redAlert ? "#c96c6c" : "#c5f1c5")};
  text-align: center;
  font-size: 20px;
`;

export default Alert;
