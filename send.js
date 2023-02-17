import webPush from "web-push";

const vapidKeys = {
  publicKey:
    "BDshZHp5hE24Bv-NFQBhIdUieOQj3VCJiAopC_CJo30RP2Q6fveT7_rKSIYRJFp-Ia_MuMiXMBNavQDfEbuqGtM",
  privateKey: "GAErvXO6fjKHUpAWxXyezEePrXDk6Hhv4PjSUNSWcLs",
};

webPush.setVapidDetails(
  "mailto:email@example.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const subscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/c-Acxyht1gQ:APA91bGev8XSOj9jVRmEdJMvXPA8SaIv64NFl2MtBDjFYUNdBZjjJGKxJ0Xj_v2VqkvcVMnLdc2GpC76sZKRL3DtGIw2kk2aqdel8SsUDYvjQ3RIGdIcHKxrxihOB-vfEcF0XumYSc0o",
  expirationTime: null,
  keys: {
    p256dh:
      "BF1Li8g1iFkOMD4v0A3pnk8NPFb5yePLMHZrWY7nfuuR0uZ3oSiVHMsbC8H3Lc0eTFxsRJow5D6m14qE3z-RBKE",
    auth: "mj9A_93PWKulz53ZTqiRlQ",
  },
};

webPush.sendNotification(
  subscription,
  JSON.stringify({
    title: "hello world",
    body: "This is a testing notification from server side",
    link: "https://github.com/tommy-iasia",
  })
);
