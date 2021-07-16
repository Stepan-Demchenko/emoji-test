import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from '../../../shared/services/message.service';
import { Observable } from 'rxjs';
import { Message } from '../../../shared/models/message';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBoxComponent implements OnInit {
  @ViewChild('textAreaElement') private readonly textArea: ElementRef;
  readonly messages$: Observable<Message[] | []> = this.messageService.getAll();

  isOpenEmojiPack = false;
  form: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly messageService: MessageService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  trackByFn = (index) => index;

  addEmoji(selected: { $event: MouseEvent, emoji: EmojiData }): void {
    const emoji: string = selected.emoji.native;
    const message = this.textArea.nativeElement;
    message.focus();

    if (document.execCommand) {
      document.execCommand('insertText', false, emoji);
      return;
    }
    const [start, end] = [message.selectionStart, message.selectionEnd];
    message.setRangeText(emoji, start, end, 'end');
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      message: ['']
    });
  }

  saveMessage(): void {
    this.messageService.addMessage({...this.form.value, createdAt: new Date()});
    this.form.get('message').patchValue('');
  }
}
