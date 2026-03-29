import {    Publisher,Subjects } from '@afotickets/common';
import type  { TicketCreatedEvent } from '@afotickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

}

