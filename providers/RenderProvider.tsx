"use client"

import { useEffect, useState } from "react";

export default function RenderProvider({children}: {children: React.ReactNode}) {
     const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);

        if (!mounted) {
            return null; 
        }
    return <div>
        {children}
    </div>
}