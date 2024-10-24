import React from "react";
import { Button } from "../ui/button";
import { CalendarPlus, PlusCircle } from "lucide-react";

export const CreateRoom = () => {
  return (
    <div className="flex justify-end p-4">
      <Button className="mx-2 px-4 py-2">
        <CalendarPlus width={16} height={16} /> Join Meeting
      </Button>
      <Button className="mx-2 px-4 py-2">
        <PlusCircle width={16} height={16} /> Create Meeting
      </Button>
    </div>
  );
};
