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
}

export const Task = ({ data, onRemoveTask }: TypeProps) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  function handleRemoveTask() {
    const uuid = data.id;
    onRemoveTask(uuid);
  }

  return (
    <MainContainer>
      <CheckboxContainer>
        <InputCheckbox type="checkbox" onChange={handleChange} />
      </CheckboxContainer>
      <TextTask Text={isChecked ? 'sublinhado' : 'normal'}>
        {data.content}
      </TextTask>
      <DeleteButton onClick={handleRemoveTask}>
        <Trash />
      </DeleteButton>
    </MainContainer>
  );
};
