import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    width: 160px;
    padding: 8px;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #312e38;
    background: #ff9000;
    border-radius: 4px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 400ms, visibility 400ms;

    font-size: 14px;
    font-weight: 500;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
