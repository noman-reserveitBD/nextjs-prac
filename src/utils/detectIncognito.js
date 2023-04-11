export const isIncognito = () => {
  
  return new Promise((resolve, reject) => {
    const fs = window.RequestFileSystem || window.webkitRequestFileSystem;

    if (!fs) {
      resolve(false);
    } else {
      fs(
        window.TEMPORARY,
        100,
        () => resolve(false),
        () => resolve(true)
      );
    }
  });
};
 
// export const isIncognito = () => {
//   try {
//     localStorage.setItem('test', 'test');
//     localStorage.removeItem('test');
//     return false;
//   } catch (e) {
//     return true;
//   }
// };

// export const isIncognito = () => {
//   return new Promise((resolve, reject) => {
//     const db = indexedDB.open('test');

//     db.onerror = () => resolve(true);
//     db.onsuccess = () => resolve(false);
//   });
// };
