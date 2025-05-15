# 💸 Ethereum Donation DApp

This is a decentralized donation application (DApp) built on Ethereum. Users can send Ether (ETH) to support a cause, track total donations, and the owner can withdraw funds after reaching the target goal.

## 🚀 Features

- Accepts ETH donations from any address
- Tracks how much each user has donated
- Shows total funds raised and donation goal
- Withdraw function accessible only to the contract owner
- Events emitted on donation and withdrawal for transparency

## 🛠️ Tech Stack

- **Solidity** – smart contract language  
- **Web3.js** – Ethereum JavaScript API for frontend interaction  
- **HTML/CSS/JavaScript** – frontend  
- **Git/GitHub** – version control
- 
## 📝 Smart Contract Overview

- `donate()` — send ETH to contract  
- `withdraw()` — owner withdraws funds if the goal is reached  
- `getBalance()` — current contract balance  
- `donations(address)` — returns total donated by address  
- `goalReached()` — returns true if goal is reached  
- Events: `DonationReceived`, `FundsWithdrawn`

## ⚙️ Getting Started

1. Clone the repository:

```
git clone https://github.com/kuvernoori/Transparent-and-Genuine-Charity-Application
.git
cd Transparent-and-Genuine-Charity-Application

```

2. Open index.html in your browser using a local server (e.g., Live Server in VS Code).

3. Connect MetaMask and interact with the contract.


