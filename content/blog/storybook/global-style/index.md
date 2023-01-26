---
title: Storybook에 Global style 적용하기
date: '2023-01-26T22:00:00.169Z'
description: Storybook에 전역 스타일 적용하기
tag:
  - storybook
---

### decorator

프로젝트의 reset.css 를 storybook 에서도 적용되게 하려면 decorator 를 사용해서 전역 스타일을 줄 수 있다.
GlobalStyles 컴포넌트를 하나 만들어서 .storybook/preview.js 에서 전역적으로 주입해줄 수 있다.

```tsx
// GlobalStyles.tsx
import { css, Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      p {
        word-break: break-all;
      }

      html {
        font-size: 10px;
      }
    `}
  />
);

export default GlobalStyles;
```

```tsx
// .storybook/preview.js
import GlobalStyles from '../src/components/GlobalStyles';

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
```
