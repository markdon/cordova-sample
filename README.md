# Setup
`npm i -g cordova appium`

`npm i`

postinstall will add cordova ios platform and `npm i` in ./testing

Now you need to set up signing in the xcode project. This can be done manually:
    - `npm run xcode`
    - HelloCordova -> Signing and Capabilities
    - Automatic Signing
    - Pick your team

You can now run a single command to build and run on appium.

`npm run build:appium` It will prepare ios, build a .app to /var/tmp/Debug-iphonesimulator/HelloCordova.app, then run wdio in ./testing which has config that points to that location for the .app.
