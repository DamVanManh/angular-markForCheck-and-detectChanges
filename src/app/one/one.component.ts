import { ChangeDetectionStrategy, Component, ElementRef } from "@angular/core";
import { hightlight } from "../highlight";

@Component({
  selector: "app-one",
  template: `
    {{ cdCheck() }}
    <a>Cmp1</a>
    <ul>
      <li>
        <app-two></app-two>
      </li>
      <li>
        <app-three></app-three>
      </li>
    </ul>
  `,
})
export class OneComponent {
  // youtube: https://www.youtube.com/watch?v=OcphK_aEd7I
  constructor(private el: ElementRef) {}

  cdCheck() {
    // hightlight(this.el);
    console.log("đã cdCheck 1");
  }
}
