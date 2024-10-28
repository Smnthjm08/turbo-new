"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function JoinRoom() {
  const router = useRouter();
  const [inviteLink, setInviteLink] = useState<string>("");

  const handleRoomJoin = () => {
    router.push("/");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Join Room</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl p-6">
        <DialogHeader className="">
          <DialogTitle>Join Room</DialogTitle>
          <DialogDescription>
            Paste the link that was given by Host.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              placeholder="Paste Invite Link Here"
              value={inviteLink}
              onChange={(e) => setInviteLink(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end mr-6">
          <DialogClose asChild>
            <Button type="button" variant="default" onClick={handleRoomJoin}>
              Join Now
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
