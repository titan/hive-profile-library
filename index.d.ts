export interface User {
    id: string;
    openid: string;
    password: string;
    name: string;
    gender: string;
    identity_no: string;
    phone: string;
    nickname: string;
    portrait: string;
    pnrid: string;
    ticket: string;
    tender_opened: boolean;
    insured: string;
    inviter: string;
    max_orders: number;
    created_at: Date;
    updated_at: Date;
}
