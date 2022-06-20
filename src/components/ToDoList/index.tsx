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

export const TodoList = () => (
  <MainContainer>
    <ContainerInputTask>
      <InputTask placeholder="Descrição da tarefa" />
      <ButtonSendTask>
        Criar
        <PlusCircle size={16} weight="bold" />
      </ButtonSendTask>
    </ContainerInputTask>
    <TasksContainer>
      <HeaderTasks>
        <TasksDescription color="blue">Tarefas criadas <TasksCounter>5</TasksCounter></TasksDescription>
        <TasksDescription color="purple">Concluídas <TasksCounter>2 de 5</TasksCounter></TasksDescription>
      </HeaderTasks>
      {hasTasks ? (
        <TasksListContainer>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
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
