import styled from "styled-components";
function TodoItem({ index, item, onDelete }) {
  return (
    <Box>
      <p>
        {index + 1}. {item}
      </p>
      <Button onClick={() => onDelete(index)}>삭제</Button>
    </Box>
  );
}

export default TodoItem;

const mainColor = (props) => props.theme.main;

const Box = styled.div`
  margin: 3px 0;
  padding: 10px;
  border: 2px solid ${mainColor};
  p {
    margin: 0 0 10px 0;
  }
`;

const Button = styled.button`
  padding: 0px 15px;
  border: 3px solid ${mainColor};
  background: #fff;
  font-size: 18px;
  color: ${mainColor};
`;
