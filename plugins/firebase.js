import firebase from "firebase"

// 初期化に必要なデータ
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
