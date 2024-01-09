# Academic Services Ordering System

This project implements a web-based system for ordering academic services. It includes features such as selecting service type, academic level, paper type, specifying quantity, and setting a deadline.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a copy of the project up and running on your local machine, follow the instructions in the [Installation](#installation) section.

## Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Node.js package manager

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
2. Navigate to the project directory:

   ```bash
   cd academic-services-ordering-system
3. Install dependencies:

   ```bash
   npm install
   
## Usage
1. Start the development server:

  ```bash
  npm run dev
```
2. Open your web browser and go to http://localhost:5173 to view the application.

## File Structure
The project is organized as follows:

src/
  components/
  ButtonGroup.js: Main component for selecting academic services and configuring the order.
  PaperTypeDropdown.js: Dropdown component for selecting paper types.
  QuantityAndDeadline.js: Component for specifying quantity and deadline.
  styles/
  style.css: Global CSS styles for the application.
  index.js: Entry point of the React application.
  App.js: Main application component.
public/
  index.html: HTML template for the application.

## Contributing
  Contributions are welcome! Feel free to open issues or submit pull requests.
