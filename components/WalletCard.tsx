"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ShowSolBalance from "@/pages/show-balance";
import WalletButton from "./global/wallet";

type CardProps = React.ComponentProps<typeof Card>;

export function WalletCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      {/* Header */}
      <CardHeader>
        <CardTitle>Wallet</CardTitle>
        <CardDescription>Check your current SOL balance below.</CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent className="grid gap-4">
        {/* Balance Section */}
        <div className="flex flex-col items-start space-y-2 rounded-md border p-4">
          <h3 className="text-sm font-medium leading-none">Wallet Balance</h3>
          <ShowSolBalance />
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter>
        <WalletButton />
      </CardFooter>
    </Card>
  );
}
