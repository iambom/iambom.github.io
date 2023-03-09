---
title: Monorepo 도입기
date: '2023-02-05T22:00:00.169Z'
description: 모노레포 도입 과정
tags:
  - monorepo
---

## Monorepo 란

monorepo 란 독립된 여러 리포지토리를 동일한 저장소에 저장하는 소프트웨어 개발 전략을 말한다. 기존 모놀리식 레포와 멀티레포 방식의 단점을 보완하기 위해 나왔다.

#### Multirepo

보통 각 도메인 및 기능 단위로 레포지토리를 만들어 멀티레포(Multirepo 또는 Polyrepo) 방식으로 서비스를 운영한다.

##### Multirepo 장점

각 프로젝트가 고유한 저장소를 갖게 됨으로써, 다른 프로젝트와의 의존성을 가지고 있지 않아 각 프로젝트는 자율성이 높으며 독립적인 개발, 린트, 테스트, 빌드, 게시, 배포 파이프라인이 존재한다. 비교적 크기가 가벼워 프로젝트 관리 면으로 수월하다.

##### Multirepo 단점

- 새로운 공유 패키지를 생성할 때마다 다음과 같이 번거로운 과정을 거쳐야 함  
   `저장소 생성 > 커미터 추가 > 개발 환경 구축 > CI/CD 구축 > 빌드 > 패키지 저장소에 publish`
- 패키지의 중복 코드 가능성
- 각 프로젝트의 코드 컨벤션이 통일하기가 어려움  
  늘어난 프로젝트 저장소의 수만큼 관리 포인트가 늘어난다. 린트, 테스트, 개발 모드 실행, 빌드, 게시, 배포 등의 과정을 저장소의 수만큼 반복

### Monorepo 장점

- 더 쉬운 프로젝트 생성
- 더 쉬운 의존성 관리
- 서로 의존하는 저장소들의 리팩터링 비용 감소

### Monorepo 특징

모노레포의 핵심적 특징은 프로젝트 사이의 관계이고, 모노레포가 적절한 상황은 다음과 같다.

- 유사한 제품의 집합
- 여러 프로젝트의 변화를 한눈에 파악해야 할 때
- 호스트 애플리케이션을 플러그인 등으로 확장할 때
- 공통 기능을 재사용하는 관련된 프로젝트의 집합
- 유사한 DevOps로 구성된 프로젝트의 집합