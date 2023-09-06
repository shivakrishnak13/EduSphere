import { Component,ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  constructor (private globalservece : GlobalService) {}

  visible: boolean = false;
  chatMessages: { text: string, isUser: boolean }[] = [{text :`Hello! ${this.globalservece.getStudentLoginDetails()?.name}`,isUser:false},{text :'How can I assist you today?',isUser:false}];
 
  
  
  
  
  
  
  
  
      showDialog() {
       
          this.visible = true;
      }
    
  sendMessage(): void {
    
    const userMessage = document.querySelector('.chat-input input') as HTMLInputElement;
    const messageText = userMessage.value.trim();
   

    
    if (messageText) {
      this.chatMessages.push({ text: messageText, isUser: true });

      // Simulate a bot response (you can replace this with actual chatbot logic)
      const botResponse = `You said: ${messageText}`;
      this.chatMessages.push({ text: botResponse, isUser: false });

      userMessage.value = '';
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }

}
