import { Component } from '@angular/core';
import { Task } from './task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

  ngOnInit(){
    this.taskArr = JSON.parse(localStorage.getItem("tasks") || "" )
  }


name = ""
taskArr : Task[] =[]
Complete = "Complete"



addTask(){
  this.taskArr.push({
    id : this.taskArr.length +1,
    title : this.name,
    isCompleted : false
  })
  this.name = ""
  this.setLocal()
}


// deleteTask(obj : Task){
//     this.taskArr= this.taskArr.filter(el => el.id != obj.id)
// }
deleteTask(index : number){
  this.taskArr.splice(index,1)
  this.setLocal()
}


completeTask(obj : Task){

  // this.Complete == "Complete" ? this.Complete = "Undo" : this.Complete = "Complete"
  obj.isCompleted = !obj.isCompleted
  this.setLocal()
}



setLocal(){
  localStorage.setItem("tasks", JSON.stringify(this.taskArr))

}


}
