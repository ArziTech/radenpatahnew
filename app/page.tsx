import Hero from "@/components/sections/home/Hero";
import {
  Dialog,
  DialogContent, DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Globe} from "lucide-react";

export default function Home() {
  return (
      <div
          className={
            "flex   size-full flex-col items-center gap-32" +
              " overflow-hidden my-32"
          }
      >
        <Hero />
        <Dialog defaultOpen={true}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle >Alamat Baru</DialogTitle>
              <DialogDescription className={'text-center text-xl'}>
                <span>
                  Website Masjid Raden Patah kini pindah ke :
                </span>
                <Button asChild variant={'link'} className={'text-xl'}>
                  <Link href={'https://radenpatah.com'}><Globe /> radenpatah.com</Link>
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

      </div>
  );
}
