#!/bin/bash

rm -f rescan.apk rescan_zalign.apk

cordova-icon

cordova build android --release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
mv platforms/android/build/outputs/apk/android-release-unsigned.apk rescan.apk
/Users/pawlikk/adt-bundle-mac-x86_64-20140702/sdk/build-tools/23.0.2/zipalign -f -v 4 rescan.apk rescan_zalign.apk
