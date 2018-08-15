import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  formData: any = {
    name : "",
    email:"",
    username:"",
    address:"",
    phone:"",
    website:"",
    company:""
  }
  @ViewChild('refVariable') regForm: NgForm;
  public get httpService(): ApiService {
    return this._httpService;
  }
  public set httpService(value: ApiService) {
    this._httpService = value;
  }
  clearData(){
    this.formData = {name : "",email:"",username:"",address:"",phone:"",website:"",company:""};
  }
  postDataFetch: any;
  constructor(private _httpService: ApiService) { }
    getHttpservice(dummmyValue):void {
      this.httpService.getTestPost(dummmyValue)
        .subscribe(
          resultData => {
            this.postDataFetch = resultData;
          },
          error => console.log("Error ::" + error)
        )
    }

  ngOnInit(): void {
    //this.getHttpservice("/posts");
    //this.getHttpservice("/comments");
    this.getHttpservice("data");
    this.clearData();
  }

  onSubmit() {
    this.formData.id = this.formData.id+1;
    this.httpService.postData("data",this.formData).subscribe(
      resultData => {
        console.log(resultData);
      },
      error => console.log("Error ::" + error)
    )
  }
  updateValue(value){
    this.httpService.putData("data"+"/"+value.id,value).subscribe(
      resultData => {
        console.log(resultData);
      },
      error => console.log("Error ::" + error)
    )
  }
  update(value){
    this.formData = value;
  }
}
