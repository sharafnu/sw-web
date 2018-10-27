import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgControl } from '@angular/forms';
import { WorkerService } from '../services/worker.service';
import { Observable } from 'rxjs';
import { Worker } from '../model/worker';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public stateList = ['UP', 'Delhi', 'Bihar', 'Punjab', 'Haryana'];
  public skillList = ['Carpenter', 'Construction Worker', 'Plaster Worker', 'Painter', 'Plumber', 'Electician']

  worker: Worker = {
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    dob: '',
    mobileNo: '',
    address: '',
    currentWorkLocation: '',
    dailyPaymentRate: 0,
    desiredWorkLocations: '',
    district: '',
    passportAvailability: false,
    pinCode: 0,
    state: '',
    workSlills: '',
    yearsOfExperience: 0
  };

  selectedUser: string;
  searchText: string;


  constructor(private workerService: WorkerService,
    private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    let firstChild = this.route.firstChild;
    if (firstChild)
      firstChild.params.subscribe(params => {
        this.selectedUser = params['id'];
      });

  }

  addWorker(formWorker: NgForm) {
    this.workerService.addWorker(this.worker);
    this.toastr.success('Success !', 'Data Saved Successfully!');
    formWorker.reset();
  }

}
