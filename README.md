# ReScan
ReScan is a simple QR-Code Scanner without ads, without flaws, opensource and simple to use. One Page App.

It can read many types of Barcodes and QR-Codes. For a detailed list please see the documentation of the barcodescanner plugin:
https://www.npmjs.com/package/phonegap-plugin-barcodescanner

I wrote this because i couldn't find an App that just scans a code of any type and lets me do what i want with it without nagging with ads
or spying on me.

ReScan uses Cordova with barcodescanner (for the scanning), device (for feature detection) and socialmedia (for intent based sharing of scanned items) plugins and the Yeti-Themed Bootstrap CSS Toolbox from Bootswatch (http://bootswatch.com/yeti/). The icons come from the most Awesome Icon Collection: Font-Awesome (http://fontawesome.io).

# Build App
## Prerequisites:
To build the app you need:

     #npm (if you prefer installing cordova and cordova-icon using this package manager)
     http://blog.npmjs.org/post/85484771375/how-to-install-npm
     
     #cordova
     sudo npm install -g cordova
     see https://cordova.apache.org for details...
     
     #cordova-icon 
     sudo npm install cordova-icon -g
     # ...which requires imagemagick (sorry):
     $ # on Linux: sudo apt-get install imagemagick
     $ # on Mac: brew install imagemagick
     $ # on Windows: http://www.imagemagick.org/script/binary-releases.php#windows
     see https://github.com/AlexDisler/cordova-icon for details...
