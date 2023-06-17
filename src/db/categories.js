import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    categoryName: "Currently Reading",
  },
  {
    _id: uuid(),
    categoryName: "Want to Read",
  },
  {
    _id: uuid(),
    categoryName: "Read",
  },
];
