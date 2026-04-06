import { Component } from '@angular/core';
import { Task } from './task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

  ngOnInit(){
    this.taskArr = JSON.parse(localStorage.getItem("tasks") || '[]' )
  }


  isRed = true

name = ""
priority = 1
taskArr : Task[] =[]
Complete = "Complete"
direction = "↑"
seletPriority = 1
add = "Add"

filterByPriority(event : any){
    this.taskArr = JSON.parse(localStorage.getItem("tasks") || "[]" )
    if(this.seletPriority != -1){
      this.taskArr = this.taskArr.filter(el => el.priority == this.seletPriority)
    }
}
editTask(item : Task, ind : number){
  this.name = item.title
  this.priority = item.priority
  this.deleteTask(ind)
  this.add = "Save Changes"
}
sort (){
  this.direction == "↑" ? this.direction = "↓" : this.direction = "↑"
    this.direction == "↑" 
    ? this.taskArr = this.taskArr.sort((a,b) => a.priority - b.priority) 
    : this.taskArr = this.taskArr.sort((a,b) => b.priority - a.priority)
}


addTask(){
  if(this.name !=""){
      this.taskArr.push({
    id : this.taskArr.length +1,
    title : this.name,
    isCompleted : false,
    priority : this.priority
  })
  this.name = ""
  this.priority = 1
  this.setLocal()
  this.add = "Add"
  }
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
