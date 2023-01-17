---
title: Android error 모음
date: '2023-01-17T09:56:32.169Z'
description: Android error 모음
tags:
  - android
---

### Unable to determine the current character, it is not a string, number, array, or object

    1. android/app/build 폴더 삭제 후 프로젝트 루트에서 yarn android 다시 하기
    2. yarn add @react-native-community/cli-platform-android 후 yarn android 다시

### Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

위 에러 2번으로 해결으로 해결 했을 때 발생  
빌드 시에 deprecated 된 기능들이 있어서 현재의 gradle 과 호환이 맞지 않다는 에러이다.

    1. android studio > preferences > Build, Execution, Deployment > Compiler > Command-line Options 에
    2. —warning-mode=all —stacktrace 입력
    3. file > Invalidate Caches / Restart
    4. 안드로이드 스튜디오 종료 > 다시 키고 > 에뮬레이터 켜기
    5. yarn android

### increment_version_number': [!] undefined method `gsub!' for nil:NilClass

```tsx

android/fastlane/fastfile 에서 versionName 가져올 때 나는 에러.

android/app/build.gradle 에서 versionName: “1.0” 으로 되어 있는 것 “1.0.0” 으로 3자리로 변경

```
