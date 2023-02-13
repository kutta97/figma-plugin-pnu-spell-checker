import React from 'react';

import { Button } from '@components/buttons/Button';

import { useResultVM } from '@views/result/resultVM';

export const Result = () => {
  const { converting, goDetail } = useResultVM();
  return (
    <div>
      <h3>Result</h3>
      <Button onClick={goDetail}>Go Detail</Button>
      <Button onClick={converting}>Go Converting</Button>
    </div>
  );
};
