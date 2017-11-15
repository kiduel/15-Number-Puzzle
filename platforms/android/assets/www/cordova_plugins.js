cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.napolitano.cordova.plugin.intent.IntentPlugin",
        "file": "plugins/com.napolitano.cordova.plugin.intent/www/android/IntentPlugin.js",
        "pluginId": "com.napolitano.cordova.plugin.intent",
        "clobbers": [
            "IntentPlugin"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.napolitano.cordova.plugin.intent": "0.1.3",
    "cordova-custom-config": "3.1.4",
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});