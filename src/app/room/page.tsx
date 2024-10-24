import { CreateRoom } from "@/components/room/create-room";
import { RoomTable } from "@/components/room/room-table";
import { Table } from "@/components/ui/table";
import React from "react";

const AuthPage = () => {
  return (
    <main className="p-24">
      {/* <main className="flex min-h-screen flex-col items-center justify-center p-24"> */}
      <div>
        <h1 className=" text-4xl font-bold mb-2">Good Morning Dev! 👋🏼 </h1>
        <p className="text-xl text-muted-foreground">
          Create Room or Join Previously Created rooms!
        </p>
      </div>
      <div>
        <CreateRoom />
        <RoomTable />
      </div>
    </main>
  );
};

export default AuthPage;
