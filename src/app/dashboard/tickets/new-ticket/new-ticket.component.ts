import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { TicketInput } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})

export class NewTicketComponent {

  @ViewChild('ticketForm') ticketForm?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<TicketInput>();

  onSubmit(title: string, ticketText: string) {
    this.add.emit({
      title: title,
      text: ticketText
    });
    this.ticketForm?.nativeElement.reset();
  }
}
