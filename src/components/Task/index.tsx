import { useState } from 'react';

import { Trash } from 'phosphor-react';

import { TypeTask } from '../ToDoList';

import {
  CheckboxContainer,
  DeleteButton,
  InputCheckbox,
  MainContainer,
  TextTask,
} from './styles';

interface TypeProps {
  data: TypeTask
  onRemoveTask: (id: string) => void
  onFinishTask: (id: string) => void
}

export const Task = ({ data, onRemoveTask, onFinishTask }: TypeProps) => {
  function handleFinishTask() {
    onFinishTask(data.id);
  }

  function handleRemoveTask() {
    onRemoveTask(data.id);
  }

  return (
    <MainContainer>
      <CheckboxContainer>
        <InputCheckbox type="checkbox" onChange={handleFinishTask} checked={data.finished} />
      </CheckboxContainer>
      <TextTask Text={data.finished ? 'sublinhado' : 'normal'}>
        {data.content}
      </TextTask>
      <DeleteButton onClick={handleRemoveTask}>
        <Trash />
      </DeleteButton>
    </MainContainer>
  );
};
