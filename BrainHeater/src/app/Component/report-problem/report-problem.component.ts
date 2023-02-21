import { Component, OnInit } from '@angular/core';
import { ReportServiceService } from 'src/app/service/report-service.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2"
@Component({
  selector: 'app-report-problem',
  templateUrl: './report-problem.component.html',
  styleUrls: ['./report-problem.component.css']
})
export class ReportProblemComponent implements OnInit {
  Category: any
  constructor(private serv: ReportServiceService) {
  }
  ngOnInit(): void {
    this.serv.getReportcategory().subscribe((res: any) => {
      this.Category = res
    })

  }
  
  myForm = new FormGroup({
    ReportType: new FormControl("", [
      Validators.required,
      
    ]),
    issue: new FormControl("", [
      Validators.required,
  
    ]),

    

    // otp:new FormControl('',[Validators.required,Validators.pattern('[0-9]{ ,6}')]),
  });

 
  get fdata() {
    return this.myForm.controls;
  }
  videoPath: any = "";
  errMsg: any = "";

  upVideo(event: any) {
    if (event.target.files.length > 0) {
      this.videoPath = event.target.files[0];
    }
  }

  postData() {
   
    let fdata: any = this.myForm.getRawValue();
    let formdata = new FormData();
    formdata.append('ReportType', fdata.ReportType);
    formdata.append("issue", fdata.issue);
    formdata.append("attach", this.videoPath);
    console.log("formdata is", formdata);
    this.serv.postReport(formdata).subscribe((res: any) => {
      if (res.err == 0)
      {
      Swal.fire(`${res.msg}`,'Kindly wait for response from BH Team','success')
        }

      // })
    })
}
}




