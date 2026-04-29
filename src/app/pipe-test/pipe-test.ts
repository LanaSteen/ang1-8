import { CurrencyPipe, DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, SlicePipe],
  templateUrl: './pipe-test.html',
  styleUrl: './pipe-test.scss',
})
export class PipeTest {
  text = 'hello world';

  price = 50

  date = new Date()




  formatString(str : string){
    return str.split("").join(".")
  }
}
