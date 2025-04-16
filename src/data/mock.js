const books = [
    {
        id: "001",
        title: "Cemitério Maldito",
        author: "Stephen King",
        publisher: "Suma das Letras"
    },
    {
        id: "002",
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        publisher: "Agir"
    },
    {
        id: "003",
        title: "Capitães da Areia",
        author: "Jorge Amado",
        publisher: "Companhia das Letras"
    }
];

const loans = [
    {
        user_name: "Aline Marques",
        book_id: "001",
        loan_date: "2024-04-01",
        return_schedule: "2024-04-15",
        return_date: "2024-04-14"
    },
    {
        user_name: "Carlos Silva",
        book_id: "002",
        loan_date: "2024-04-05",
        return_schedule: "2024-04-19",
        return_date: null // ainda não devolveu
    }
];

const users = [
    {
        full_name: "Aline Marques",
        address: "Rua das Acácias, 120 - Centro",
        phone_number: "(21) 91234-5678"
    },
    {
        full_name: "Carlos Silva",
        address: "Av. Brasil, 4500 - Bonsucesso",
        phone_number: "(21) 99876-5432"
    },
    {
        full_name: "Joana Pereira",
        address: "Rua Floriano Peixoto, 77 - Catete",
        phone_number: "(21) 98888-2222"
    }
];

export { books, loans, users };