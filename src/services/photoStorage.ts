// IndexedDB photo storage service
// Photos are stored as Blobs in IndexedDB to avoid localStorage overflow

const DB_NAME = "park-buddies-db";
const DB_VERSION = 1;
const STORE_NAME = "photos";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

/** Store photo Blob, returns unique ID */
export async function savePhoto(blob: Blob): Promise<string> {
  const id = `photo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const request = store.put(blob, id);
    request.onsuccess = () => resolve(id);
    request.onerror = () => reject(request.error);
  });
}

/** Read photo Blob */
export async function getPhoto(id: string): Promise<Blob | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(id);
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror = () => reject(request.error);
  });
}

/** Read photo as ObjectURL */
export async function getPhotoURL(id: string): Promise<string | null> {
  const blob = await getPhoto(id);
  if (!blob) return null;
  return URL.createObjectURL(blob);
}

/** Delete photo */
export async function deletePhoto(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

/** Clear all photos */
export async function clearAllPhotos(): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const request = store.clear();
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}
