import { Component, OnInit } from '@angular/core';
import { CustomService } from '../../../modules/home/services/custom/custom.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private customService: CustomService) { }

  ngOnInit(): void {
    this.customService.getTodos()
      .subscribe(r => console.log(r))
  }

  saveTodo() {
    this.customService.saveTodo()
      .subscribe(r => console.log(r))
  }

  deleteTodo() {
    this.customService.deleteTodo()
      .subscribe(r => console.log(r))
  }

  updateTodo() {
    this.customService.updateTodo()
      .subscribe(r => console.log(r))
  }

  patchTodo() {
    this.customService.patchTodo()
      .subscribe(r => console.log(r))    
  }
}
