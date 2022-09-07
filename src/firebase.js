// import firebase from 'firebase/app'
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDCqIjgbBhfovZRZIh-Is1RRAdVRm-ALyQ',
  authDomain: 'suvstreet-portfolio.firebaseapp.com',
  databaseURL:
    'https://suvstreet-portfolio-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'suvstreet-portfolio',
  storageBucket: 'suvstreet-portfolio.appspot.com',
  messagingSenderId: '238714194161',
  appId: '1:238714194161:web:3e8791349e3e8de4660150',
}

const app = initializeApp(firebaseConfig)

// Получить ссылку на службу хранилища, которая используется для создания ссылок в вашей корзине хранилища
const storage = getStorage()

// Create a reference under which you want to list
const listRef = ref(storage, 'portfolio/slider/1')

// console.log('listRef', listRef)

// listAll(listRef).then((res) => {
//   res.prefixes.forEach((folderRef) => {
//     console.log('folderRef', folderRef)
//   })
//   res.items.forEach((itemRef) => {
//     console.log('itemRef', itemRef.fullPath)
//   })
// })

let p = []

const path = async () => {
  // перечисляем полные пути до картинок в storege
  await listAll(listRef).then((res) => {
    res.items.forEach((itemRef) => {
      // сохроняем пути до картинок
      getDownloadURL(ref(storage, itemRef.fullPath)).then((url) => {
        p.push(url)
      })
    })
  })
}

path()

console.log('path', p)

// getDownloadURL(ref(storage, p)).then(url => {
//   console.log('url', url)
// })

// console.log('pathReference', pathReference)
// console.log('listAll', listAll(listRef))
