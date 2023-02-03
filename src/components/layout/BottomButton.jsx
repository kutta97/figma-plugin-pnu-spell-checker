import * as React from 'react';
import styled from 'styled-components';

import { Button } from '@components/common/Button';

import { BOTTOM_PAGE_TYPE } from '../../consts';

/**
 *
 * @param pageType : 'MAIN'|'CONVERT'|'GO_MAIN'|'HIDDEN'
 * @returns {JSX.Element}
 * @constructor
 */
export function BottomButton({ pageType }) {
  const renderMainBottom = () => <Button text="검사하기" />;

  const renderConvertBottom = () => (
    <>
      <span>전체 선택</span>
      <Button text="텍스트 변환하기" />
    </>
  );

  const renderGoMainBottom = () => <Button text="처음으로" />;

  const renderBottom = () => {
    switch (pageType) {
      case BOTTOM_PAGE_TYPE.CONVERT: {
        return renderConvertBottom();
      }
      case BOTTOM_PAGE_TYPE.GO_MAIN: {
        return renderGoMainBottom();
      }
      default: {
        return renderMainBottom();
      }
    }
  };

  if (pageType === BOTTOM_PAGE_TYPE.HIDDEN) {
    return null;
  }

  return <BottomButtonStyled>{renderBottom()}</BottomButtonStyled>;
}

const BottomButtonStyled = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 16px;
`;
