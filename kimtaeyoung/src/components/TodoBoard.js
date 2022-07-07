import styled from "styled-components";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function TodoBoard() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("todoList");
    if (savedTodoList) {
      return JSON.parse(savedTodoList);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodoList((currentList) => [...currentList, todo]);
  };
  const onDelete = (index) => {
    setTodoList(todoList.filter((item, todoIndex) => index !== todoIndex));
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="할 일을 입력하세요." />
        <button>추가</button>
      </Form>
      <h1>Todo List</h1>
      <ScrollBox>
        {todoList.map((item, index) => (
          <TodoItem key={index} index={index} item={item} onDelete={onDelete} />
        ))}
      </ScrollBox>
    </div>
  );
}

export default TodoBoard;

const Form = styled.form`
  width: 490px;
  height: 40px;
  display: flex;
  justify-content: space-between;

  input {
    padding: 5px;
    width: 400px;
    font-size: 16px;
    border: 3px solid ${(props) => props.theme.main};

    &:focus {
      outline: none;
    }
  }

  button {
    background: ${(props) => props.theme.main};
    width: 50px;
    font-size: 18px;
    color: #fff;
    border: 0;
  }
`;

const ScrollBox = styled.div`
  padding-right: 10px;
  width: 500px;
  height: 400px;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.main};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.dark};
    border-radius: 5px;
    background-clip: padding-box;
  }
`;
