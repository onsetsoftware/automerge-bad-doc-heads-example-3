# Automerge mismatching heads example 3

To reproduce the issue, clone the repo then run `npm install` and `npm run dev` (or yarn equivalents).

This example includes the raw data representing the state of a document which is being synced via a "source of truth" server. 

The `localDoc` is a document which has just been updated by a local peer (peer1). Crucially, at the same time it is also receiving sync protocol messages from the server to bring it up to date with a second peer (peer2) which has already synced a couple of hundred changes to the server.

The server doc receives a `syncMessage` from peer1 and applies it. The result is a document which, when saved, throws a `error inflating document chunk ops: mismatching heads` error when loaded.

Note that the `localDoc` state has a `count` of 181, while the server has already been updated to 200. The change which triggers the `syncMessage` was to increment the count from 180 to 181.
