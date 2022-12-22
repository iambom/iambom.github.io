---
title: React Native iOS 다크 모드에서 StatusBar 라이트 모드처럼 보이게 하기
date: "2022-12-22T19:56:32.169Z"
description: iOS dark mode에서 StatusBar light mode처럼 보이게 하기
---

- React Native 버전은 `0.70.5`
- 방법

  - <b>info.plist</b> 에서 아래 코드를 복사하여 추가해준다.

    ```
    <key>UIStatusBarStyle</key>
    <string>UIStatusBarStyleDarkContent</string>

    <key>UIUserInterfaceStyle</key>
    <string>Light</string>
    ```

  - xcode > info 파일에서 직접 추가 해주면 위에서 직접 복붙한 코드가 자동으로 추가된다.

    - <b><i>Appearance</i></b> key가 코드에는 `<key>UIUserInterfaceStyle</key>` 로 들어감

      ![xcode에서의 info.plist 파일](./info_plist.png)
