# Blockchain Demo: Smart Contract
This repository contains smart contracts demo that manages document verification and agreements between parties, as well as an infrastructure system that controls the transaction/workflow within its blockchain-based delivery orders online service using Ethereum technology.

## Project Division
**Smart Contract Development📜**
- Build business logic transactions on the blockchain network

**Platform Engineering🛠️**
- Create and manage blockchain component infrastructure (such as cloud instances, Docker, blockchain platform, databases, workflow control)

## Project Tasks
**Container**
- Request DO
1. Approval/Rejection DO request (S/L)
2. Send back DO file to INSW 
3. INSW received then send back or reject to CO
4. INSW deliver DO to Terminal Operator and INAPortnet
5. CO receive DO approval or rejection

- Request Extend DO
1. Approval/Rejection DO extend (S/L)
2. Send back DO extension file to INSW
3. INSW received then send back or reject to CO, TO, and INAPortnet
4. CO receive DO extension approval or rejection


**Non-Container**
1. Approval/Rejection DO request
2. Send back DO file to INSW 
3. INSW received then send back or reject to CO
4. INSW deliver DO and **VIN List Data** to Terminal Operator and INAPortnet
5. CO received DO approval or rejection


## Project Goals
