import {    Publisher,Subjects } from '@afotickets/common';
import type  { TicketUpdatedEvent } from '@afotickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;

}

 