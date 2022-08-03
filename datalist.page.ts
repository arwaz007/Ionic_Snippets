import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.page.html',
  styleUrls: ['./datalist.page.scss'],
})
export class DatalistPage implements OnInit {
 name:string;
 phone:string;
 email:string;
 arr:any=[];

  constructor(private alrt:AlertController) { }

  ngOnInit() {
  }
  // for setting data into list on one page
setData(str)
{
  if(str.value.uname=="" && str.value.phone=="" && str.value.email=="")
  {  
     alert("plz enter data first");
  }else{
 if(this.arr.includes(str.value))
 {
   alert("already exist data")
 }else{
 this.arr.push(str.value);
 console.log(str.value);
 }
}
}
//delete data
deleteTask(index,itm){
  this.arr.splice(index,1);
}
// for update data
async updateTask(index) {
  let alert = await this.alrt.create({
    header: 'Update your data?',
    message: 'Type in your new task to update.',
    inputs: [{ name: 'editName', value: this.arr[index].uname },
    { name: 'editPhone', value: this.arr[index].phone },
    { name: 'editMail', value: this.arr[index].email }
  ],
    buttons: [{ text: 'Cancel', role: 'cancel' },
              { text: 'Update', handler: data => {  
                this.arr[index].uname = data.editName;
                this.arr[index].phone = data.editPhone;
                this.arr[index].email= data.editMail; }}]
  });
  await alert.present();
}
}
