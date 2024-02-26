import { Component, signal } from '@angular/core';
interface UserInterface{
  id:string;
  name:string;
  role:string;
}
@Component({
  selector: 'app-new-features',
  standalone: true,
  imports: [],
  templateUrl: './new-features.component.html',
  styleUrl: './new-features.component.scss'
})
export class NewFeaturesComponent {
users = signal<UserInterface[]>([
  {id:'1', name:'one', role:'developer'},
  {id:'2', name:'two', role:'developer1'},
  {id:'3', name:'three', role:'developer2'},
]);

 user = this.users()[2]

// users:UserInterface[]= [
//   {id:'1', name:'one', role:'developer'},
//   {id:'2', name:'two', role:'developer1'},
//   {id:'3', name:'three', role:'developer2'},
// ]
}
