Blockchain-Based Digital Identity Verification System

This project implements a decentralized and secure digital identity verification system leveraging blockchain technology. It aims to address challenges like identity fraud, unauthorized access, and data breaches by providing a robust, transparent, and user-centric solution. With the integration of blockchain, smart contracts, and decentralized identity management, this system offers tamper-proof verification and enhances user privacy. 

The platform incorporates machine learning for fraud detection and uses digital signatures to ensure the integrity and authenticity of identity-related transactions. Users gain full control over their digital identities, enabling selective data sharing with authorized parties while maintaining anonymity when necessary.


## Setting Up and Running the Project

To get started with the project, follow these steps:

1. Download and install Node.js version 10.x with LTS from [Node.js](https://nodejs.org/).
2. Install Ganache from [Truffle Framework](https://truffleframework.com/ganache).
3. Install Truffle globally using NPM with the command:
   ```bash
   npm i -g truffle
   ```
4. Set Ganache's port to `9545` in the settings.
5. Open the project's root directory in your terminal.
6. Compile the smart contracts with the command:
   ```bash
   truffle compile
   ```
7. Deploy the contracts using:
   ```bash
   truffle migrate
   ```
8. Configure the required environment variables for the project.
9. Run the application using:
   ```bash
   npm run buildandrun
   ```
10. Open your browser and navigate to [http://localhost/](http://localhost/) to access the application locally.

## Using the Decentralized Application

### For New Users
1. Visit the live site at [http://134.209.159.164](http://134.209.159.164) or your local deployment at `http://localhost/`.
2. Click the **Sign Up** button.
3. Enter your details correctly. Ensure you remember your unique user ID as it will be required for future actions.

### For the Demo Project
1. Navigate to [http://134.209.159.164/insurance.html](http://134.209.159.164/insurance.html) or `http://localhost/insurance.html` for local testing.
2. Provide your first name, last name, and user ID as entered during account creation.
3. Complete the rest of the form and submit it.
4. If the data is validated, your application will be processed successfully. If not, the corresponding error will be displayed.

## Environment Variables

The application uses the following environment variables:
- `PORT`: Specify the port for running the server.
- `JWT_SECRET`: A random string for signing JWT tokens.

## Technologies and Frameworks Used

This project employs a combination of cutting-edge technologies and frameworks:

- **Blockchain Framework**: Truffle for smart contract deployment and testing.
- **Backend Framework**: ExpressJS for server-side logic and APIs.
- **Frontend Libraries**: Bootstrap for styling and jQuery for enhanced user interface functionality.

## Key Features

1. **Decentralized Identity Management**: Eliminates single points of failure and enhances data security through blockchain.
2. **Fraud Detection**: Uses machine learning to identify anomalies and suspicious activities.
3. **Privacy-Preserving Mechanisms**: Empowers users to control their data and share it selectively.
4. **Scalability**: Supports multiple identity verification requests simultaneously with minimal overhead.

## Conclusion

This blockchain-based digital identity verification system sets a new standard for secure and reliable identity management. By decentralizing the process and integrating advanced technologies, it addresses the limitations of traditional methods and creates a trustworthy digital ecosystem.

.
