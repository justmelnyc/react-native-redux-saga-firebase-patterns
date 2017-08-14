export function firebaseListenRequested(ref, metaType) {
  return {
    type: types.firebase.FIREBASE_LISTEN_REQUESTED,
    payload: ref,
    meta: { type: metaType },
  }
}

export function firebaseListenRejected(error, metaType) {
  return {
    type: types.firebase.FIREBASE_LISTEN_REJECTED,
    payload: { error },
    meta: { type: metaType },
  }
}

export function firebaseListenFulfilled(items, metaType) {
  return {
    type: types.firebase.FIREBASE_LISTEN_FULFILLED,
    payload: { items },
    meta: { type: metaType },
  }
}

export function firebaseListenChildAdded(id, value, metaType) {
  return {
    type: types.firebase.FIREBASE_LISTEN_CHILD_ADDED,
    payload: { id, value },
    meta: { type: metaType },
  }
}

export function firebaseListenChildChanged(id, value, metaType) {
  return {
    type: types.firebase.FIREBASE_LISTEN_CHILD_CHANGED,
    payload: { id, value },
    meta: { type: metaType },
  }
}

export function firebaseListenChildRemoved(id, metaType) {
  return {
    type: types.firebase.FIREBASE_LISTEN_CHILD_REMOVED,
    payload: { id },
    meta: { type: metaType },
  }
}

export function firebaseListenRemoved(clearItems, metaType) {
  return {
    type: types.firebase.FIREBASE_LISTEN_REMOVED,
    payload: { clearItems },
    meta: { type: metaType },
  }
}

export function firebaseRemoveListenerRequested(clearItems, metaType) {
  return {
    type: types.firebase.FIREBASE_REMOVE_LISTENER_REQUESTED,
    payload: { clearItems },
    meta: { type: metaType },
  }
}

export function firebaseRemoveAllListenersRequested() {
  return {
    type: types.firebase.FIREBASE_REMOVE_ALL_LISTENERS_REQUESTED,
    payload: { clearItems: true },
  }
}
