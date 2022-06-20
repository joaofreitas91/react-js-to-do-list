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
}

export const Task = ({ data }: TypeProps) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }
  return (
    <MainContainer>
      <CheckboxContainer>
        <InputCheckbox type="checkbox" onChange={handleChange} />
      </CheckboxContainer>
      <TextTask Text={isChecked ? 'sublinhado' : 'normal'}>
        {data.content}
      </TextTask>
      <DeleteButton>
        <Trash />
      </DeleteButton>
    </MainContainer>
  );
};
