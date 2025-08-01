export interface Ticket {
    id: string;
    title: string;
    request: string;
    status: 'open' | 'closed';
}

export interface TicketInput {
    title: string,
    text: string
}