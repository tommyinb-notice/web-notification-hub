# web-notification-hub

This is a simple project helping you start using web notification.

Visit https://tommy-iasia.github.io/web-notification-hub/ for a demonstration.

## 1. Generate VAPID

You need a voluntary application server identity when using web notification.

```cmd
npm run vapid
```

Generate one with the above command.

```json
{
  "publicKey": "BFFiSrGdwHpf2TUbtKVJi3pp5vHvwasm8oufIvzRQisxUf8QgdRTaTG4IaD6PXBC1YQnvS9L2fLeHkTqKx5ciPg",
  "privateKey": "iA7zvCsDbX2oGEzLujvhfDWnqLk5gRqSrClkrUcmQjM"
}
```

## 2. Set VAPID

Replace with your new VAPID public key in code.

_index.js_

```js
export const publicKey =
  "BDshZHp5hE24Bv-NFQBhIdUieOQj3VCJiAopC_CJo30RP2Q6fveT7_rKSIYRJFp-Ia_MuMiXMBNavQDfEbuqGtM";
```

_send.js_

```js
const vapidKeys = {
  publicKey:
    "BDshZHp5hE24Bv-NFQBhIdUieOQj3VCJiAopC_CJo30RP2Q6fveT7_rKSIYRJFp-Ia_MuMiXMBNavQDfEbuqGtM",
  privateKey: "GAErvXO6fjKHUpAWxXyezEePrXDk6Hhv4PjSUNSWcLs",
};
```

## 3. Start Server

```cmd
npm run start
```

This will start a HTTP server at http://localhost:8080

## 4. Subscription

In the client page, you will ask for notification permission. After granting the permission, the page automatically subscribe to your browser's notification service. A subcription is then created.

```json
{
  "endpoint": "https://fcm.googleapis.com/fcm/send/c-Acxyht1gQ:APA91bGev8XSOj9jVRmEdJMvXPA8SaIv64NFl2MtBDjFYUNdBZjjJGKxJ0Xj_v2VqkvcVMnLdc2GpC76sZKRL3DtGIw2kk2aqdel8SsUDYvjQ3RIGdIcHKxrxihOB-vfEcF0XumYSc0o",
  "expirationTime": null,
  "keys": {
    "p256dh": "BF1Li8g1iFkOMD4v0A3pnk8NPFb5yePLMHZrWY7nfuuR0uZ3oSiVHMsbC8H3Lc0eTFxsRJow5D6m14qE3z-RBKE",
    "auth": "mj9A_93PWKulz53ZTqiRlQ"
  }
}
```

## 5. Send Notification

Set your subscription in _send.js_ as well.

```cmd
npm run send
```

Then, you should see a testing notification within seconds.

## 6. Debug

If you failed in any of the above steps, feel free to read the _vapid.js_, _index.js_, _sw.js_ and _send.js_.

They are short and simple.

## 7. GitHub Page

It will be quite useful if you deploy this project into GitHub Page.

> http://tommy-iasia.github.com/web-notification-hub

So that notification will be fired under the name of my GitHub. I do suggest you deploying to your own GitHub Page as well. Enjoy!
