#!/bin/bash

rm -f rescan.apk rescan_zalign.apk

cordova-res

cordova build android --release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name
mv platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk rescan.apk
/Users/pawlikk/Library/Android/sdk/build-tools/29.0.2/zipalign -f -v 4 rescan.apk rescan_zalign.apk
