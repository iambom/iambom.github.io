---
title: React createPortal API 이용해서 Modal 만들기
date: '2023-02-24T22:00:00.169Z'
description: React createPortal API 이용해서 Modal 만들기
tags:
  - react
---

퍼블리싱 할 때 팝업 만들 때 항상 body랑 같은 레벨에 만들었었는데 react에서 root DOM tree와 같은 레벨에 컴포넌트 렌더링이 되게 하려면 `createPortal` API를 쓰면 된다고 해서 사용해서 Modal을 만들어보았다.
리액트 포탈은 컴포넌트가 종속되어 있는 돔 트리를 벗어나 외부의 다른 돔으로 렌더하는 기능이다. 어플리케이션은 하나이지만 부분적으로 다른 돔에 마운트할 수 있다.
<a href="https://beta.reactjs.org/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal" target="_blank">React createPortal 공식문서에서 소개하는 Modal 예시</a>

#### index.html에 모달이 렌더링 될 DOM 추가

```
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

#### portal 생성 및 연결

```
import ReactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
}

const DialogPortal = ({ children }: Props) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDom.createPortal(children, el);
};

export default DialogPortal;

```

#### 모달 사용

```
const Dialog = ({ children, isOpen, onClose }: IDialogProps) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add('hidden');
    else document.body.classList.remove('hidden');
  }, [isOpen]);

 return (
    <>
      {isOpen && (
        <DialogPortal>
          <div className="container">
            <div className="overlay" onClick={onClose}></div>
            <div className="content_wrapper>
              <div className="content">내용</div>
            </div>
          </div>
        </DialogPortal>
      )}
    </>
  );
};
```

참고

- [react-portal](https://jeonghwan-kim.github.io/2022/06/02/react-portal)
