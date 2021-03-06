import { Component, OnInit } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  contacts$ :any;
  users: any;
  userStatus: any;
  listUsers: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = ['rk','mk','pk'];
    //first method of using observables
    this.contacts$ = of (this.users);
    console.log(this.contacts$);
    
    //second method
    new Observable(observer=>{
      setTimeout(()=>{
        observer.next('In progress')
      },2000);
    
    setTimeout(()=>{
      observer.next('In pending')
    },4000);
 
  setTimeout(()=>{
    observer.next('Complete')
  },6000);
}). subscribe({
  next: (v) => this.userStatus = v,
  error: (e) => console.error(e),
  complete: () => console.info('complete') 
})
    

//third method
this.userService.getUser().subscribe({
  next: (v) => this.listUsers = v,
  error: (e) => console.error(e),
  complete: () => console.info('complete') 
})


  }

}
