---
id: screener-app
title: Screener Application
---

The Screener Application allows you to Stream videos from Packages to a pre-configured Apple TV.
To allow streaming to an Apple TV using the Screener Application, you must first configure it, and then give access to Users.

---

## Configuring an Apple TV for the Screener App

Download the 5thKind Screener App from the Apple TV App Store, then open it.

![](/img/apple-tv/screener-app/screener-app-register-1.png)
You must enter the Client Name, the name of the Device, and the Registration Code.  
If you do not have this information, you can get it from your Administrator.   

---

## Managing Screener Devices 
The Screener App Admin Panel allows you to manage registered Screener Devices.
![](/img/apple-tv/screener-app/screener-app-admin-1.png)
### Registration Code
Anyone registering a Screener Device must enter this code for security reasons.  You can change it any time by typing a new code and clicking <span class="buttonstyle">Change Code</span>.

### Devices
View your registered Screener Devices here.

**Device Name-** The name of the device.  You can type a new name here to change it.

**IP Address-** The IP Address of the Screener Device.

**Device Location-** The city where the Device is located.

**Last Date Used-** The most recent time when someone streamed to the Device.

**# of Users with Access-** The number of Users in the system who are able to stream to the Device.  See the next section for more details.

**Watermark Style-** The style of the Watermark that will be applied to videos streamed to the Device.

**Watermark Text-** The text of the Watermark that will be applied to videos streamed to the Device.

**Action-** Click the <i class="fa fa-times" aria-hidden="true"></i> to un-register the Device.  Once you do this, the Device can no longer be streamed to.

---

## Managing Access to Screener Devices
To stream to a Screener Device, a User must be granted permission for it in their User Role.
![](/img/apple-tv/screener-app/screener-app-user-role-1.png)

When viewing a User Role, click the Screener tab.  Check the box of any Screener Device the Users should be able to stream to.

[See User Roles topic for more information about creating and managing User Roles.](user-roles.md)

---

## Streaming Videos to Screener Devices
If your User Role gives you permission to stream to Screener Devices, you can do it from any Package.
![](/img/apple-tv/screener-app/screener-app-display-1.png)
When viewing any Package, click the <i class="fa fa-tv" aria-hidden="true"></i> icon to open the Screener Panel.

If you have the ability to stream to more than one Device, you will see the available Devices listed.  Select one to proceed.

If you only have the ability to stream to a single Device, you will automatically be taken to the Screener Player.

![](/img/apple-tv/screener-app/screener-app-player-1.png) 

The Player will automatically start playing the first video in the Playlist to the selected Device.

### Screener App Controls
Click the <i class="fa fa-stop" aria-hidden="true"></i> button to pause playback.

Click the <i class="fa fa-play" aria-hidden="true"></i> button to resume playback.

Click the <i class="fa fa-step-forward" aria-hidden="true"></i> button to play the next video in the Playlist.

Click the <i class="fa fa-step-backward" aria-hidden="true"></i> button to play the previous video in the Playlist.

The icon of the currently playing video will be shown at the bottom of the Screener Panel.

### Selecting a Video to Play
To select a video to play manually, click its thumbnail in the Package, then click the <i class="fa fa-play" aria-hidden="true"></i> button to start playing it.

### Using the System While Streaming
You can continue to use the system as normal while streaming.  

If you close the Package, you'll see a notification in the top bar containing the name of the Device you're currently streaming to.
![](/img/apple-tv/screener-app/screener-app-top-bar-1.png)
Click it at any time to return to the Package and the Screener Panel.

Click the <i class="fa fa-times" aria-hidden="true"></i> button on it to stop streaming.
 
