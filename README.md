# Basic Chat Application

This repository contains a basic real-time chat application using *`Node.js`*, *`Express`*, and *`Socket.io`*. Users can enter messages in a text box, send them to the server, and have the messages broadcasted to all connected clients.

## Files

### 1. `index.js`

- This is the main server file.
- It sets up an Express app, creates an HTTP server using the app, and initializes a Socket.io instance on the server.
- Serves static files from the `public` directory (including `index.html` and `script.js`).
- Handles socket connections, disconnections, and the reception of new messages.
- The server listens on port 3000.

### 2. `script.js`

- This is the client-side JavaScript file.
- Listens for the DOMContentLoaded event and initializes a connection to the server using Socket.io.
- Handles sending messages to the server when the "Send" button is clicked.
- Listens for incoming messages from the server and appends them to the message list.

### 3. `index.html`

- Basic HTML file for the chat application.
- Includes a text input for typing messages, a "Send" button to send messages, and a list to display received messages.
- Imports the Socket.io client script and the `script.js` file.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/mohinimahato/Basic_chat_application.git
2. Navigate to the project directory:

   ```bash
   cd basic-chat-application
   ```
   
3. Install dependencies:

   ```bash
   npm install
    ```

4. Install dependencies:

   ```bash
   npm install
    ```

5. Start the server:
   ```bash
   node index.js
    ```

6. Open your browser and go to http://localhost:3000 to use the chat application.

## How It Works

- When a user connects to the server, a unique socket ID is logged to the console.
- Users can enter messages in the text box and click "Send" to broadcast the messages to all connected clients.
- Received messages are displayed in a list on each client's page.
- Feel free to modify and expand upon this basic chat application for your specific needs!
