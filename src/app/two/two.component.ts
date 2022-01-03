import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
} from "@angular/core";
import { hightlight } from "../highlight";

@Component({
  selector: "app-two",
  template: `
    {{ cdCheck() }}
    <a
      >Cmp2 <br />
      <button (click)="cd.detectChanges()">[detectChanges()]</button>
      <br />
      <button (click)="cd.markForCheck()">[markForCheck()]</button>
    </a>

    <ul>
      <li>
        <app-four></app-four>
      </li>
      <li>
        <app-five></app-five>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoComponent {
  constructor(private el: ElementRef, public cd: ChangeDetectorRef) {}

  cdCheck() {
    // hightlight(this.el);
    console.log("đã cdCheck 2");
  }

  //does not work for all the cases
  // ngDoCheck() {
  //   console.log("ngDoCheck");
  // }

  //does not work for all the cases
  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }
}
