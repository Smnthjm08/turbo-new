import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserPlus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export const RoomTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>List of your recent calls.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoices</TableHead>
            <TableHead>Room Name</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <div className="flex items-center p-2 rounded">
                    <UserPlus width={20} height={20} className="mr-1" />
                    <span>Invite</span>
                  </div>
                  <Button className="flex items-center p-2 bg-red-100 text-red-800 rounded hover:bg-red-200">
                    <Trash2 width={16} height={16} className="mr-1" />
                    <span>Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
