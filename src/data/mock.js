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
        return_date: null
    },
    {
        user_name: "Ana Paula Vieira",
        book_id: "001",
        loan_date: "2024-12-10",
        return_schedule: "2025-01-10",
        return_date: "2025-01-16"
    },
    {
      user_name: "Carlos Mendes",
      book_id: "002",
      loan_date: "2025-01-15",
      return_schedule: "2025-02-15",
       return_date: "2025-02-14"
     },
     {
      user_name: "Julia Silva",
         book_id: "003",
      loan_date: "2025-03-01",
      return_schedule: "2025-04-01",
      return_date: null
    },
    {
      user_name: "Bruno Oliveira",
         book_id: "001",
      loan_date: "2025-03-10",
       return_schedule: "2025-04-10",
      return_date: "2025-04-08"
    },
    {
      user_name: "Ana Paula Vieira",
      book_id: "003",
      loan_date: "2025-04-01",
      return_schedule: "2025-05-01",
      return_date: "2025-04-23"
    },
    {
       user_name: "Ana Paula Vieira",
       book_id: "002",
       loan_date: "2025-05-01",
       return_schedule: "2025-06-01",
       return_date: "2025-05-014"
    }
         
];

const users = [
    {
      full_name: "Aline Marques",
      address: "Rua das Acácias, 123 - Mesquita, RJ",
      phone_number: "(21) 98888-1234"
    },
    {
      full_name: "Carlos Silva",
      address: "Av. Central, 456 - Niterói, RJ",
      phone_number: "(21) 97777-5678"
    },
    {
      full_name: "Ana Paula Vieira",
      address: "Rua Floriano Peixoto, 789 - Queimados, RJ",
      phone_number: "(21) 96666-9876"
    },
    {
      full_name: "Carlos Mendes",
      address: "Travessa dos Jacarandás, 321 - Queimados, RJ",
      phone_number: "(21) 95555-2468"
    },
    {
      full_name: "Julia Silva",
      address: "Rua das Palmeiras, 654 - São Gonçalo, RJ",
      phone_number: "(21) 94444-1357"
    },
    {
      full_name: "Bruno Oliveira",
      address: "Av. Atlântica, 111 - Mesquita, RJ",
      phone_number: "(21) 93333-7890"
    }
  ];
  

export { books, loans, users };