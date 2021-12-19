export interface PropsBooks {
    books: Book[],
    paramTwo: string,
    optionalParam?: string
  }

  export interface PropsBook {
    book: Book
  }

export interface Book {
    id: string,
    title: string,
    author: string,
    price: number
  }