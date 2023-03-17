const webpush = require('web-push');
// Public Key:
//     BInQKHlWPIsQivVroJg83i7IhPOOXJbsrEITHoGzZfLiAoPY1hBvPl6ol432WBKr7xXqSeG7Kn5omHM_KfIPVZQ
//
// Private Key:
//     0kXMi_I8uuzRKsyvfmWwUPCD9Do8Knc9cEqpXQ1Zb7c

// VAPID keys should be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
    endpoint: '.....',
    keys: {
        auth: '.....',
        p256dh: '.....'
    }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');