import React from 'react';

import { PAGE_TYPE } from '@consts/index';

import { Button } from '@components/buttons/Button';

import { usePageRouter } from '@hooks/usePageRouter';

export const Complete = () => {
  const { next, clear } = usePageRouter();
  const handleHomeClick = () => {
    next(PAGE_TYPE.HOME, true);
    clear();
  };
  return (
    <div>
      <h3>Complete</h3>
      <Button onClick={handleHomeClick}>처음으로</Button>
    </div>
  );
};
