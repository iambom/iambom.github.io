---
title: Next.js에서의 SSR, CSR, SSG, ISR
date: '2023-03-09T22:00:00.169Z'
description: Next.js에서의 SSR, CSR, SSG, ISR
tags:
  - next
---

### SSR (Server Side Rendering)

서버가 데이터를 가져와서 그린다.

`getServerSideProps` : Next.js에서 SSR 을 담당하는 함수

### CSR (Client Side Rendering)

클라이언트(브라우저)가 데이터를 가져와서 그린다.

CSR 을 담당하는 함수는 Next.js 에 따로 없고 기존 react 사용법과 동일하다.

### SSG (Static Site Generation)

정적 사이를 데이터를 가져와서 그려둔다.

`getStaticProps` : Next.js에서 SSG를 담당하는 함수 (with `getStaticPaths`)

개발 환경 (yarn dev 로 로컬 서버 켰을 때)에서는 SSG가 제대로 동작하지 않는다. 개발 환경에서는 SSG가 SSR처럼 동작한다. SSG 를 보려면 build 를 해야한다. build 를 하면 SSG 를 이미 만들었다는 뜻이다.
build 타이밍에 데이터를 다 가져와서 static 페이지를 미리 생성해놨다.
SSR은 서버가 계속 실행 되는 것이기 때문에 사용자가 많거나 하면 서버에 부하가 생기지만 SSG 페이지는 build 할 때 이미 만들어 둔 것을 보여주기만 하기 때문에 서버 부하 없이 서비스를 제공할 수 있다.

### ISR (Incremental Static Regeneration)

증분 정적 사이트를 재생성한다. (특정 주기로 데이터를 가져와서 그려둔다.)

특정 주기로 정적인 사이트를 데이터를 가져와서 다시 그려둔다.

`getStaticProps` : Next.js에서 ISR를 담당하는 함수 (with `revaildate`)

SSG의 장점과 SSR의 장점을 적절하게 사용할 수 있다.
