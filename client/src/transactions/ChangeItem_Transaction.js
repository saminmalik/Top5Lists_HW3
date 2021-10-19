import jsTPS_Transaction from "../common/jsTPS.js"
 /**
  * MoveItem_Transaction
  * 
 * This class represents a transaction that updates the text
 * for a given item. It will be managed by the transaction stack.
     
     @author McKilla Gorilla
  */
 export default class ChangeItem_Transaction extends jsTPS_Transaction {
     constructor(initStore, initItemInd, initOldText, initNewText) {
         super();
         this.store = initStore;
         this.itemInd= initItemInd;
         this.oldText = initOldText;
         this.newText = initNewText;
     }

     doTransaction() {
         this.store.renameListItem(this.itemInd, this.newText);
     }

     undoTransaction() {
         this.store.renameListItem(this.itemInd, this.oldText);
     }
 } 