import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private listService: ListService) { }
  users: any

  ngOnInit() {
    this.listService.getUsers().subscribe(
      (users: any) => {
        this.users = users.results[0]
        console.log(this.users)
      }
    )
  }

}
