import * as Automerge from "@automerge/automerge";

import { localDocData, serverDoc, syncMessage } from "./data";

// this is the doc that has just been updated locally (peer1) and from which the sync message has been generated
const localDoc = Automerge.load(localDocData);

// create a new sync state on the receiving end
const syncState = Automerge.initSyncState();

// this is the current document on the receiving end
const doc = Automerge.load(serverDoc);

// receive the sync message
const [newDoc, newSyncState] = Automerge.receiveSyncMessage(doc, syncState, syncMessage);

console.log(localDoc, doc, newDoc);

// the newDoc has mismatched heads 
Automerge.load(Automerge.save(newDoc));
