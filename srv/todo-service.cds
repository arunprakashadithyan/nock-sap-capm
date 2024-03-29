namespace my.todoapp;

using my.todoapp as todos from './todo-service';

entity Todos {
  key id   : String;
  title    : String;
  completed: Boolean;
}

entity Comments {
  postId : String;
  key id : String;
  name : String;
  email : String;
  body : String;
}

service ToDoService {
  entity Todos as projection on todos.Todos;
  entity Comments as projection on todos.Comments;
}
