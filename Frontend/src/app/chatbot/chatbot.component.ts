import { Component,ViewChild, ElementRef, AfterViewChecked,Input,OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AIService } from '../ai.service';
import { promptForBot } from '../Allmodels.model';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements AfterViewChecked , OnInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @Input() data: any;
  chatMessages: { text: string, isUser: boolean }[] = [];
  constructor (private globalservece : GlobalService,private AiService : AIService) {}

  visible: boolean = false;
 
  
  ngOnInit(): void {
    this.chatMessages.push({text :`Hello! ${this.data || 'User'}`,isUser:false},{text :'Welcome to EduHub',isUser:false},{text :'How can I assist you today?',isUser:false})
  }
  
  
  
  
  
  
      showDialog() {
       
          this.visible = true;
      }
    
    async sendMessage(): Promise<void> {
    
    const userMessage = document.querySelector('.chat-input input') as HTMLInputElement;
    let messageText = userMessage.value.trim();
   

    
    if (messageText) {
      this.chatMessages.push({ text: messageText, isUser: true });

      // Simulate a bot response (you can replace this with actual chatbot logic)
      userMessage.value = '';

        let prompt = `${promptForBot}
        

        this below one is the question please reply from above content if its not matched reply a short message and content should be  short and concise.

        question : ${messageText}
        
        `
        
        console.log(prompt);
        
        const res = await this.AiService.makeOpenAIRequest(prompt)

      const botResponse =res;
      this.chatMessages.push({ text: botResponse, isUser: false });
      userMessage.value = '';
      messageText = "";
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
