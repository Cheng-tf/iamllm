if (true) {
  const hostname = window.location.hostname;
  const pathname = window.location.pathname || '';

  const isLocal = hostname === '127.0.0.1' || hostname === 'localhost';
  const isMySite = hostname === 'cheng-tf.github.io' && pathname.startsWith('/iamllm');

  if (!(isMySite || isLocal)) {
    console.log('skip record (not my site)');
  } else {
    const firebaseConfig = (window && window.FIREBASE_CONFIG) || {
        apiKey: "AIzaSyA-3ixTu3oWvwF4z0Jdn5M76zte5SwEDGI",
        authDomain: "personal-website-52b2e.firebaseapp.com",
        projectId: "personal-website-52b2e",
        storageBucket: "personal-website-52b2e.firebasestorage.app",
        messagingSenderId: "1007724884899",
        appId: "1:1007724884899:web:5957fdab33d460f8e9e016"
    };

    try {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
    } catch (e) {
      // Fallback for Firebase v8 init multiple times
      try {
        firebase.initializeApp(firebaseConfig);
      } catch (_) {}
    }

    const db = firebase.firestore();

    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip || '';
            const city = data.city || '';
            const region = data.region || '';
            const country = data.country_name || '';

            const excludedCountries = ["Japan", "Singapore", "Taiwan"];
            if (excludedCountries.includes(country)) {
                console.log(`Visitor from ${country} is excluded from logging.`);
                return;
            }

            const now = new Date();
            const utcTimestamp = now.getTime() + (now.getTimezoneOffset() * 60000);
            const beijingOffset = 8 * 60 * 60000;
            const beijingTime = new Date(utcTimestamp + beijingOffset);

            const year = beijingTime.getFullYear();
            const month = String(beijingTime.getMonth() + 1).padStart(2, '0');
            const day = String(beijingTime.getDate()).padStart(2, '0');
            const hours = String(beijingTime.getHours()).padStart(2, '0');
            const minutes = String(beijingTime.getMinutes()).padStart(2, '0');
            const seconds = String(beijingTime.getSeconds()).padStart(2, '0');
            const milliseconds = String(beijingTime.getMilliseconds()).padStart(3, '0');

            const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

            const log = {
                ip: ip,
                city: city,
                region: region,
                country: country,
                path: window.location.pathname + window.location.search,
                referrer: document.referrer || '',
                timestamp: timestamp
            };

            const baseCollection = 'cheng_tf_iamllm_visitors';
            const logPath = `${baseCollection}/${year}/${month}/${day}`;
            db.collection(logPath).doc(`${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`).set(log)
                .then(() => {
                    console.log("Visitor data saved successfully");
                })
                .catch(error => {
                    console.error("Error saving visitor data: ", error);
                });
        })
        .catch(error => {
            console.error("Error fetching IP info: ", error);
        });
  }
} else {
  console.log("skip record");
}
