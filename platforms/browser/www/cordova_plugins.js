cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.napolitano.cordova.plugin.intent": "0.1.3",
    "cordova-custom-config": "3.1.4",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-whitelist": "1.3.2"
}
// BOTTOM OF METADATA
});