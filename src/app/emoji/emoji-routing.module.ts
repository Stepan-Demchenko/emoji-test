import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmojiPageComponent } from './containers/emoji-page/emoji-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmojiPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmojiRoutingModule { }
