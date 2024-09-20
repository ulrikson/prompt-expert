# Prompt Expert

Prompt Expert is a browser extension designed to help you write better AI prompts. It provides a user-friendly interface to input roles, goals, instructions, and context, and generates a well-structured prompt based on these inputs.

## Features

- **Role Input**: Define the role for the AI (e.g., Chef, Teacher).
- **Goal Input**: Specify the goal you want to achieve (e.g., Make healthy recipes).
- **Instructions Input**: Provide detailed instructions for the AI.
- **Context Input**: Add any relevant context to help the AI understand the task better.
- **Generate Button**: Click to generate a structured prompt.
- **Copy to Clipboard**: Easily copy the generated prompt to your clipboard.

## Installation

1. Clone the repository or download the ZIP file.
2. Open your browser and navigate to the extensions page (e.g., `chrome://extensions/`).
3. Enable "Developer mode" if it is not already enabled.
4. Click on "Load unpacked" and select the directory containing the project files.

## Usage

1. Open the extension by clicking on the extension icon in your browser.
2. Fill in the fields for Role, Goal, Instructions, and Context.
3. Click the "Generate" button to create a structured prompt.
4. The generated prompt will be displayed in the result section.
5. Click on the result to copy it to your clipboard.

## File Structure

- `images/`: Contains the extension icons.
- `manifest.json`: The manifest file for the browser extension.
- `popup.css`: The CSS file for styling the popup interface.
- `popup.html`: The HTML file for the popup interface.
- `popup.js`: The JavaScript file containing the logic for the extension.
- `README.md`: This README file.

## Code Overview

### `popup.js`

- **Event Listeners**: Sets up event listeners for DOMContentLoaded and button clicks.
- **Input Handling**: Functions to get and save input values.
- **Prompt Generation**: Functions to handle different parts of the prompt (role, goal, instructions, context) and concatenate them into a final result.
- **Clipboard**: Function to copy the generated prompt to the clipboard.

### `popup.css`

- **Styling**: Defines the styles for the popup interface, including the layout, form elements, and buttons.

### `popup.html`

- **Structure**: Defines the structure of the popup interface, including input fields and the generate button.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
