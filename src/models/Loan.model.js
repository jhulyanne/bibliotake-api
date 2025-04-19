// -- apenas descritivo por enquanto
export class Loan {
    constructor(user_name, book_id, loan_date, return_schedule, return_date){
        this.user_name = user_name;
        this.book_id = book_id;
        this.loan_date = loan_date;
        this.return_schedule = return_schedule;
        this.return_date = return_date;
    }
}