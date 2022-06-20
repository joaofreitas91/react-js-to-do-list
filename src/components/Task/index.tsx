import { useState } from 'react';

import { Trash } from 'phosphor-react';

import {
  CheckboxContainer,
  DeleteButton,
  InputRadio,
  MainContainer,
  TextTask,
} from './styles';

export const Task = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }
  return (
    <MainContainer>
      <CheckboxContainer>
        <InputRadio type="checkbox" onChange={handleChange} />
      </CheckboxContainer>
      <TextTask Text={isChecked ? 'sublinhado' : 'normal'}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </TextTask>
      <DeleteButton>
        <Trash />
      </DeleteButton>
    </MainContainer>
  );
};
