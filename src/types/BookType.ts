type BookType = {
  title: string;
  ISBN: string;
  cost: number;
  number: number;
  id?: string;
  borrowDate?: number;
  paid?: boolean;
};

export default BookType;
