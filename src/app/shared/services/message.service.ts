import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages = new BehaviorSubject<Message[] | []>([]);
  private messages$: Observable<Message[] | []> = this.messages.asObservable();

  constructor() {
  }

  getAll(): Observable<Message[] | []> {
    return this.messages$;
  }

  addMessage(message: Message): void {
    const allMessages: Message[] = this.messages.value;
    allMessages.unshift(message);
    this.messages.next(allMessages);
  }
}
