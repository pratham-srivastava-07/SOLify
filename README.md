![image](https://github.com/user-attachments/assets/2eb91007-13e0-48ec-9c65-5ff45360bc62)


# SOLify

SOLify is a Solana wallet adapter that enables easy wallet connections and smooth transaction handling. It provides a unified interface for interacting with popular SOL wallets, making it perfect for DApps, DeFi platforms, and NFT marketplaces.

## Features
- **Unified Wallet Interface**: Connect seamlessly to Phantom, Solflare, and other Solana wallets.
- **Transaction Handling**: Smooth and secure transaction execution.
- **Developer-Friendly**: Simple API for integrating with Solana-based applications.
- **Optimized for DApps**: Ideal for DeFi platforms, NFT marketplaces, and other Solana projects.

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn
- Solana CLI
- Phantom Wallet or any Solana-compatible wallet

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/pratham-srivastava-07/SOLify.git
   cd solify
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Usage
Import SOLify into your project and initialize the wallet adapter.

```tsx
import { SolifyWalletAdapter } from "solify";

const wallet = new SolifyWalletAdapter();
await wallet.connect();
console.log("Connected wallet address:", wallet.publicKey);
```

### Running the Project
1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your branch
5. Open a pull request

## License
This project is licensed under the MIT License.

## Contact
For inquiries, reach out at [your email] or open an issue in the repository.

