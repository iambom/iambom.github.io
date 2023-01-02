---
title: React Native Firebase Cloud Messaging Push Notification
date: '2023-01-02T16:00:00.169Z'
description: FCM으로 푸시 알림 구현하기
---

## 1. 프로젝트에 firebase 설치

프로젝트에서 Firebase Cloud Meassaging 을 사용하려면 firebase 라이브러리가 설치 되어야 함

```tsx
yarn add @react-native-firebase/app @react-native-firebase/messaging
```

## 2. 권한 요청 requestUserPermission()

- Android: 사용자 권한을 요청할 필요 없음
- iOS : 권한 요청 필요 (앱 최초 실행 시 아래처럼 알림 권한 묻는 것)

## 3. 메세지 수신

- Foreground : onMessage()
- Backgroud and quit : setBackGroundMessageHandler()

```tsx
// index.js
import messaging from '@react-native-firebase/messaging';

/** 백그라운드 및 앱 종료 상태일 때 푸시 알림 */
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('백그라운드', remoteMessage);
});
```

```tsx
// App.tsx
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    getFCMToken();

    /** 포그라운드 상태일 때 푸시 알림 (백그라운드는 index.js 위치) */
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('포그라운드', JSON.stringify(remoteMessage));
      Alert.alert('포그 ', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
};

export default App;
```

## 4. Android Heads-Up Notification 구현

iOS 에서는 위 코드만 있으면 배너 알림이 나오는데 Android 에서는 로컬 푸시 라이브러리를 사용해서 따로 구현해주어야 한다. firebase 공식 문서에서 notifee 를 소개하고 있어서 이걸 사용.

```tsx
// utils/pushNotification.js
import notifee, { AndroidImportance, AndroidVisibility } from '@notifee/react-native';

export const displayNotification = async message => {
  const channelAnoucement = await notifee.createChannel({
    id: '111',
    name: 'channleIdIs111',
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
  });

  await notifee.displayNotification({
    title: message.notification.title,
    body: message.notification.body,
    android: {
      channelId: channelAnoucement,
    },
  });
};
```

안드로이드는 channel 이라는 개념이 있어서 채널을 만들어 주어야 한다. 채널 생성 후 그 채널에 로컬 알림을 띄우는 것이다.

```tsx
// message 파라미터에 들어오는 값
{
	"notification":{
		"android":{
			"sound":"default",
			"channelId":"111"
		},
		"body":"내용",
		"title":"푸시 테스트"
	},
	"sentTime":1672650431147,
	"data":{},
	"from":"fromValue",
	"messageId":"messageIDValue",
	"ttl":2419200,
	"collapseKey":"kr.com"
	}
```

파라미터에 응답 받은 푸시 메세지의 android channelId 와 동일시 해주면 된다.
