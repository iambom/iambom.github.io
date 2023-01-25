---
title: React Native Android fastlane을 사용한 앱 배포
date: '2023-01-25T22:00:00.169Z'
description: fastlane 을 사용해서 react native로 만든 android app 을 firebase 와 google play store에 자동으로 배포해보자
---

### 1. API access를 위한 Service Account 생성

Fastlane을 통해 안드로이드를 배포할 때, 구글 API를 사용하기 때문에 `Google Developer Service Account`를 생성할 필요가 있다. (구글 클라우드 플랫폼에서 생성)

파일은 `android/google-api-access-key.json` 으로 저장했다.

### 2. fastlane init

- fastlane 생성을 위해 명령어 입력

```jsx
cd android
fastlane init
```

- 초기화가 끝나면 안드로이드용 fastlane file 생성
  - fastlane 폴더: fastlane의 설정 및 실행 파일들이 들어 있는 폴더
  - Gemfile, Gemfile.lock: fastlane을 실행 시키기 위한 라이브러리 설치 파일
- 초기화 할 때 cmd 창에서 입력한 package name 과 JSON 파일 정보

```jsx
// android/fastlane/Appfile
json_key_file('google-api-access-key.json');
package_name('kr.test.app');
```

### 3. fastlane 관련 설정

안드로이드 패키지 네임을 통일 시켜야 빌드가 된다. fastlane 에서 패키지 이름 변경 해주는 플러그인 제공해주니 일일이 변경하지 않고 플러그인 사용하면 됨

```tsx
// 패키지 네임 변경 해주는 플러그인 설치
cd android
fastlane add_plugin rename_android_package
```

설치한 플러그인으로 FastFile 에서 아래처럼 사용하면 됨.

```tsx
// android/fastlane/FastFile
desc "Submit a new Beta Build to Firebase App Distribution"
  lane :beta do |options|
    updateVersion(options)

    rename_android_package(
      path: "./",
      package_name: "kr.test.app.beta",
      new_package_name: "kr.test.app."
    )

    rename_android_package(
      path: "./",
      package_name: "kr.test.app.",
      new_package_name: "kr.test.app.beta"
    )

    gradle(
      task: "clean assembleRelease",
      print_command: false,
    )
  end
```
