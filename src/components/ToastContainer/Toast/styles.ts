import { animated } from 'react-spring'

import styled, { css } from 'styled-components'

interface ToastItemProps {
  type?: 'info' | 'success' | 'error'
  hasDescription: boolean
}

const toastTypeVariations = {
  info: css`
    background: #f0faff;
    color: #326eb4;
  `,

  success: css`
    background: #e6fffa;
    color: #326464;
  `,

  error: css`
    background: #fadcdc;
    color: #c83232;
  `
}

export const Container = styled(animated.div)<ToastItemProps>`
  display: flex;
  position: relative;
  width: 360px;
  padding: 16px 30px 16px 16px;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.9;

  ${props => toastTypeVariations[props.type || 'info']}

  &:hover {
    opacity: 1;
  }

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 0 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      opacity: 0.8;
      font-size: 14px;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 10px;
    top: 16px;
    opacity: 0.6;

    color: inherit;
    background: transparent;
    border: 0;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`
