import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-emoji-page',
  templateUrl: './emoji-page.component.html',
  styleUrls: ['./emoji-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmojiPageComponent {

  constructor() { }
}
