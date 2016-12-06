#!/bin/bash
cordova build android --release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
mv platforms/android/build/outputs/apk/android-release-unsigned.apk rescan.apk
