import { RowDataPacket } from "mysql2";

export interface Product extends RowDataPacket {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
