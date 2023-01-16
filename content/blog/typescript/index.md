---
title: TypeScript 에러 모음
date: '2023-01-05T22:00:00.169Z'
description: TypeScript 에러 모음
---

### Assign object to a variable before exporting as module default

```tsx
// 위 경고 발생
export default { func1, func2 };

// fix
const funcGroup = { func1, func2 };
export default funcGroup;
```

### Argument of type 'any' is not assignable to parameter of type 'never'.

```tsx
// Argument of type 'any' is not assignable to parameter of type 'never'.
const arrayElement: [] = [];
...
array.forEach((data: any) => {
	...
	arrayElement.push(data);
});


// 배열의 타입을 명시해주어야 함.
cosnt arrayElement: any[] = [];
```

### Cannot invoke an object which is possibly 'undefined'.

컴포넌트 props 로 넘겨 받는 함수가, undefined 일 수도 있을 때

```tsx
type Props = {
  onClick?: (id: string) => void;
};

const Component = ({ onClick }) => {
  // error: Cannot invoke an object which is possibly 'undefined'.
  return <button onClick={() => onClick(id)}>삭제</button>;

  // correct
  return <button onClick={() => onClick?.(id)}>삭제</button>;
};
```

### 'onChange' is specified more than once, so this usage will be overwritten.

spread 를 썼으면 onChange 를 뒤에다 써주어야 함

```tsx
// before (error)
<Switch onChange={onChange} {...args} />;

// after (fix)
<Switch {...args} onChange={onChange} />;
```

### Property '' does not exist on type 'Window & typeof globalThis'.

- typescript 는 window 객체에 대한 정의를 해주지 않으면 에러 발생
- global.d.ts 파일을 `tsconfig.json` 에 넣어 주라고 하지만 안 넣어도 되길래 일단 안 넣음

```tsx
// global.d.ts
declare interface Window {
  ReactNativeWebView: any;
}
```

```tsx
// AppListenter.tsx
export default AppListener = () {
	window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'EXIT_APP' }));
}
```

```tsx
// tsconfig.json
{
	"compilerOptions": { ... }
	"include": ["src", "global.d.ts"]
}
```

### This JSX tag's 'children' prop expects a single child of type 'Element', but multiple children were provided.

컴포넌트를 감싸는 Container 를 만들어서 감쌌는데 위 같은 에러가 났음.
children 이 여러 개라는 에러 같아서 빈 태그로 감싸줬더니 해결 됨

```tsx
const Container = ({ children }: { children: JSX.Element }) => {
  return children;
};
```

```tsx
//before
const App = () => {
	...
	return (
		<Container>
			{Platform.OS === 'ios' && <StatusBar barStyle="dark-content" translucent />}
      <AppBox>
        <WebviewContainer handleEndLoading={handleEndLoading} />
      </AppBox>
		</Container>
	)
}

// after
const App = () => {
	...
	return (
		<Container>
			<>
				{Platform.OS === 'ios' && <StatusBar barStyle="dark-content" translucent />}
	      <AppBox>
	        <WebviewContainer handleEndLoading={handleEndLoading} />
	      </AppBox>
			</>
		</Container>
	)
}

```

### 'onChange' is specified more than once, so this usage will be overwritten.

spread 를 썼으면 onChange 를 뒤에다 써주어야 함

```jsx
// before (error)
<Switch onChange={onChange} {...args} />;

// after (fix)
<Switch {...args} onChange={onChange} />;
```
