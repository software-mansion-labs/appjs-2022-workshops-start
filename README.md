# react-native-appjs

**Example library with TurboModule and Fabric component for App.js 2022 conference workshops.**

First, install the dependencies in the root directory:

```console
yarn install
```

There are two example apps that we will use during workshops:
* `Example` &ndash; React Native 0.67.4 with old architecture
* `FabricExample` &ndash; React Native 0.68.2 with new architecture

### Example app

First, install the dependencies in `Example/` directory:

```console
cd Example
yarn install
cd ios
pod install
cd ..
yarn start
```

Once you install the dependencies, build and run Example app both for Android (using Android Studio) and iOS (using Xcode).

### FabricExample app

First, install the dependencies in `FabricExample/` directory:

```console
cd FabricExample
yarn install
cd ios
pod install
cd ..
yarn start
```

Once you install the dependencies, build and run FabricExample app both for Android (using Android Studio) and iOS (using Xcode).

**Note:** Building React Native apps with new architecture enabled requires Android NDK. It is likely that you already have the NDK installed as it is required by other community packages, but in case you don’t, please follow the instructions from [Android developers portal](https://developer.android.com/studio/projects/install-ndk).
