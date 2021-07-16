import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojiRoutingModule } from './emoji-routing.module';
import { EmojiPageComponent } from './containers/emoji-page/emoji-page.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    EmojiPageComponent,
    MessageBoxComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    EmojiRoutingModule,
    ButtonModule,
    PickerModule,
    ReactiveFormsModule
  ]
})
export class EmojiModule { }
