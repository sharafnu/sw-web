import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

import { Worker } from '../model/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private database: AngularFirestore) { }
  workersCollection: AngularFirestoreCollection<Worker>;
  workers: Observable<Worker[]>;
  workerDocument: AngularFirestoreDocument<Worker>;

  // updateworker(worker: worker){
  //   this.workerDocument = this.database.doc(environment.firebaseDocs.worker);
  //   this.workerDocument.update(worker);
  // }

  addWorker(worker: Worker){
    this.workersCollection = this.database.collection('/workers'); 
    this.workersCollection.add(worker);
  }

  getWorkers(){

    this.workersCollection = this.database.collection('/workers');    
    this.workers = this.workersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Worker;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
    return this.workers;
  }

  getWorker(id){
    this.workerDocument = this.database.doc('workers/' + id);  
    return  this.workerDocument.snapshotChanges().pipe(
      map(actions => {
        const data = actions.payload.data() as Worker;
        data.id = actions.payload.id;
        return data;
      })
    );

  }

  deleteWorker(id){
    this.workerDocument = this.database.doc('workers/' + id);
    this.workerDocument.delete();      
  }
}
