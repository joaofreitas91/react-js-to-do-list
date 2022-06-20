import { ChangeEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { PlusCircle } from 'phosphor-react';
import clipboard from '../../assets/clipboard.svg';

import { Task } from '../Task';

import {
  ButtonSendTask,
  ContainerInputTask,
  HeaderTasks,
  InputTask,
  MainContainer,
  NoTasks,
  NoTasksImageContainer,
  NoTasksText,
  TasksContainer,
  TasksCounter,
  TasksDescription,
  TasksListContainer,
} from './styles';

const hasTasks = true;

export interface TypeTask {
  id: string
  content: string
  finished: boolean
}

export const TodoList = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [tasksList, setTasksList] = useState<TypeTask[]>([]);

  const finishedTasks = tasksList.reduce((acc, e) => (e.finished ? acc + 1 : acc), 0);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setTaskDescription(value);
  }

  function handleCreateTask() {
    const uuid = uuidv4();

    const newTask = {
      id: uuid,
      content: taskDescription,
      finished: false,
    };

    setTasksList(((previousList) => [...previousList, newTask]));

    setTaskDescription('');
  }

  return (
    <MainContainer>
      <ContainerInputTask>
        <InputTask
          placeholder="Descrição da tarefa"
          onChange={handleChange}
          value={taskDescription}
        />
        <ButtonSendTask onClick={handleCreateTask}>
          Criar
          <PlusCircle size={16} weight="bold" />
        </ButtonSendTask>
      </ContainerInputTask>
      <TasksContainer>
        <HeaderTasks>
          <TasksDescription color="blue">Tarefas criadas <TasksCounter>{tasksList.length}</TasksCounter></TasksDescription>
          <TasksDescription color="purple">Concluídas <TasksCounter>{finishedTasks} de {tasksList.length}</TasksCounter></TasksDescription>
        </HeaderTasks>
        {tasksList.length > 0 ? (
          <TasksListContainer>
            {tasksList.map((task) => <Task key={task.id} data={task} />)}
          </TasksListContainer>
        ) : (
          <TasksListContainer>

            <NoTasks>
              <NoTasksImageContainer>
                <img src={clipboard} alt="" />
              </NoTasksImageContainer>
              <NoTasksText>Você ainda não tem tarefas cadastradas</NoTasksText>
              <NoTasksText>Crie tarefas e organize seus itens a fazer</NoTasksText>
            </NoTasks>
          </TasksListContainer>

        )}
      </TasksContainer>
    </MainContainer>
  );
};
