'use client'
import React, { useEffect } from 'react'
import { toast } from "sonner"
import {useRouter} from "next/navigation";

const ToasterTrigger = () => {
  const router  = useRouter();
  useEffect(() => {
    // Set interval untuk memunculkan toast setiap 5 detik
    const intervalId = setInterval(() => {
      toast("Alamat baru", {
        className: '!text-primary [&_div]:!text-primary [&_button]:!bg-primary [&_button]:!text-primary-foreground [&_button]:!shadow-xs [&_button]:!hover:bg-primary/90',
        description: "radenpatah.com",
        action: {
          label: "Kunjungi",
          onClick: () => router.push('https://radenpatah.com'),
        },
      });
    }, 10000); // 5000 milidetik = 5 detik

    // Cleanup function untuk clear interval ketika komponen unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array berarti efek hanya dijalankan sekali saat mount

  return <div className={'hidden'}></div>
}

export default ToasterTrigger