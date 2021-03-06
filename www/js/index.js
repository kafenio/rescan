/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      app.scan();
    },

    scan: function() {
      cordova.plugins.barcodeScanner.scan(
        function (result) {
         document.getElementById('content').innerHTML = ""+result.text;
         document.getElementById('codeformat').innerHTML = "Format: "+result.format;
       },
       function (error) {
         alert("Scanning failed: " + error);
       },
       {
           "preferFrontCamera" : false, // iOS and Android
           "showFlipCameraButton" : true, // iOS and Android
           "showTorchButton" : true, // iOS and Android
           "disableAnimations" : true, // iOS
           "prompt" : "Place a barcode inside the scan area", // supported on Android only
           //"formats" : "QR_CODE,PDF_417,AZTEC" // default: all but PDF_417 and RSS_EXPANDED
           //"orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
       }
      );
    }
};

app.initialize();
