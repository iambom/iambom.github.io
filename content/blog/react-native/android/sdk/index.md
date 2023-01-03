---
title: Android SDK version 설정 이해하기
date: '2023-01-03T10:22:00.169Z'
description: Android SDK version 설정 이해하기
---

push-notification 을 구현하며 로컬 알림을 위해 notifee 라이브러리를 사용하고 에뮬레이터 빌드를 하는데 에러가 났다. 관련 에러를 찾아보니 <a href="https://github.com/invertase/notifee/issues/528" target="_blank">notifee 라이브러리</a>에서 compileSdkVersion 버전을 올려야 한다고 했다.
기존에는 compileSdkVersion 과 targetSdkVersion 이 31 이어서 아래 답변처럼 33 으로 올려주었다.

그래서 안드로이드 sdk version 에 대하여 찾아봤다.

### Android SDK 와 Android API

Android SDK는 Android Software Development Kit 의 약자이고, Android API, Android 개발 Tools, sample codes, develop document 등등 포함되어 있다.
Android 프레임워크 API 레벨은 Android SDK에 속한 Android API 이다.
따라서, 개발자가 사용하는 compileSdkVersion, targetSdkVersion, minSdkVersion 은 sdk 로 불리고, 사용자가 사용하는 기기에선 API 레벨이라는 말로 불리게 된다.

각 기기가 사용하는 API 레벨이 다를 수 있기 때문에 앱에 대한 명시가 필요하다. 이 때의 명시가 compileSdkVersion, targerSdkVersion, minSdkVersion 이다.

### compileSdkVersion

- Gradle에 어떤 안드로이드 sdk 버전으로 앱을 컴파일 할 것인지 알려준다. 즉, 지원할 수 있는 가장 높은 API 버전이다.
- 컴파일 시 사용되는 Android API 버전이므로, 실제 개발 중 사용할 수 있는 Android API 범위는 compileSdkVersion 에 의해 결정된다.
- 컴파일 시에만 적용되므로 런타임 동안에는 영향을 미치지 않는다.
- 항상 최신 버전의 sdk로 지정하는 것이 좋다.
- import 문으로 참조되는 클래스나 메소드를 찾을 때 어떤 버전의 SDK에서 찾을 것인가를 결정해준다.

### minSdkVersion

- minSdkVersion 보다 낮은 API 버전은 앱을 설치할 수 없다.

### targetSdkVersion

- 앱이 기기에서 동작할 때 사용되는 Android API 버전을 의미한다. 따라서, 실제 앱 동작에 영향을 주게 되므로 신중히 올려야 한다.
- 앱은 기본적으로 targetSdkVersion 에 명시된 API 버전을 기준으로 동작한다.
  (예외적으로 기기 OS 버전이 낮아 targetSdkVersion 의 API 를 지원하지 않으면 기기 OS 버전을 따라감)

참고  
https://vagabond95.me/posts/android-api-version-manage  
https://duzi077.tistory.com/141  
https://velog.io/@sery270/Android-SDK-%EB%B2%84%EC%A0%84-%EC%84%A4%EC%A0%95%EA%B3%BC-%ED%98%B8%ED%99%98%EC%84%B1-%EB%AA%A8%EB%93%9C-compileSdkVersion-targetSdkVersion-minSdkVersion
