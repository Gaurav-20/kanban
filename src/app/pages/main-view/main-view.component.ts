import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
      new Column('Ideas', [
          "Some random idea",
          "This is another idea",
          "Try to build an amazing application"
        ]),
      new Column('Research', [
          "Some random research",
          "This is another research",
          "Understand application architecture"
        ]),
      new Column('Todo', [
          "Do the random idea",
          "Do the another idea",
          "Build an amazing application"
        ]),
      new Column('Done', [
          "Some random idea done",
          "This is another idea done",
          "Built an amazing application"
        ]),
    ])

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}