import { Component, OnInit } from '@angular/core';

import { WorkerService } from '../services/worker.service';
import { Observable } from 'rxjs';
import { Worker } from '../model/worker';


@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  public workers: Observable<Worker[]>;

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.workers = this.workerService.getWorkers();
  }

}
