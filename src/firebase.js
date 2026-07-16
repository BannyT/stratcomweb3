import {initializeApp} from 'firebase/app'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,updateProfile} from 'firebase/auth'
import {collection,addDoc,getDocs,updateDoc,deleteDoc,doc,onSnapshot,query,orderBy,getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyB3Ue2QxvavMI6r80E7YferdKoEd8Ri33w",
  authDomain: "web3-9bd3d.firebaseapp.com",
  projectId: "web3-9bd3d",
  storageBucket: "web3-9bd3d.firebasestorage.app",
  messagingSenderId: "711063095864",
  appId: "1:711063095864:web:c6dde5d06dc32a021634cd",
  measurementId: "G-3CXRGYMV79"
};

  //initialzing firebase app here

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)


export{auth,db,addDoc,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,updateDoc,collection,deleteDoc,onSnapshot,query,orderBy,doc,getDocs,getFirestore,signOut};