"use client"

import { Button } from "@/components/ui/button"
import { WalletCard } from "@/components/WalletCard"
import { useRouter } from "next/navigation"

export default function Main() {
    const router = useRouter()
    return  <div>
    <div className="grid grid-col-2">
        <div className="flex items-center justify-center space-x-3">
            <div>
                <Button onClick={()=>{router.push("/sol-faucet")}}>Airdrop SOL</Button>
            </div>
            <div>
                <Button onClick={()=>{router.push("/airdrop")}}>Airdrop Yourself</Button>
            </div>
            
        </div>
        <div className="flex items-center justify-center space-x-3 pt-5">
            <div>
                <Button onClick={()=>{router.push("/show-balance")}}>Balance</Button>
            </div>
            <div>
                <Button onClick={()=>{router.push("/send")}}>Send SOL</Button>
            </div>
        </div>
        <div className="flex items-center justify-center space-x-3 pt-5">
            <div>
                <Button onClick={()=>{router.push("/sign-msg")}}>Sign Message</Button>
            </div>
        </div>
        <WalletCard />
    </div>
</div>
}