---
title: Storybook에 대하여
date: '2023-01-30T22:00:00.169Z'
description: 스토리북을 만들어 보면서 알게된 내용 정리
tags:
  - storybook
---

### Control

스토리북에서 props를 타입에 따라 컨트롤 할 수 있게 해줘 props 에 따라 해당 컴포넌트가 어떻게 변경되는지 확인할 수 있다.
<a href="https://storybook.js.org/docs/react/essentials/controls#annotation" target="_blank">스토리북 control 공식 문서</a>에서 다양한 타입의 control을 확인할 수 있다.

![스토리북에 사용되는 control 예시](./control-ex.jpeg)

control에서 보이고 싶지 않는 props 들은 아래처럼 <b>argTypes</b>에 해당 props에서 `table: {disable: true}` 을 추가해주면 control table에서 보이지 않는다.

![control table disable no show](./control-table.jpeg)
