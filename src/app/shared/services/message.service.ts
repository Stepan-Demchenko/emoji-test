import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages = new BehaviorSubject<Message[] | []>([]);

  constructor() {}

  getAll(): Observable<Message[] | []> {
    return this.messages.asObservable();
  }

  addMessage(message: Message): void {
    const allMessages: Message[] = this.messages.value;
    allMessages.unshift(message);
    this.messages.next(allMessages);
  }
}
