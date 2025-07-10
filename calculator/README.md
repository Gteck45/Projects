# 🧮 Modern Calculator App

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS" />
</div>

<p align="center">
  A sleek, modern calculator web application built with Next.js and React, featuring a beautiful dark-themed UI with gradient effects.
</p>

![Calculator Preview](https://gteck45.cloud/Calcu.png)

## ✨ Features

- **Elegant UI Design**: Dark-themed interface with beautiful gradients and rounded buttons
- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, division
- **Additional Functions**: Percentage calculations, decimal points
- **Calculation History**: View your recent calculations
- **Responsive Design**: Works on all devices from mobile to desktop
- **Keyboard Support**: Use your keyboard for calculations
- **Error Handling**: Graceful handling of invalid expressions

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator.git
   cd calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the calculator in action.

## 🔧 Usage

The calculator provides a familiar interface with the following features:

- **Number Buttons**: 0-9 and 00 for quick input
- **Operation Buttons**: +, -, ×, ÷, % for calculations
- **Control Buttons**:
  - `C` - Clear all calculations and history
  - `CE` - Clear the last entry
  - `.` - Add decimal point
  - `=` - Calculate the result

### Example Operations

1. Basic arithmetic: `5 + 3 = 8`
2. Multiple operations: `5 + 3 * 2 = 11`
3. Percentage calculations: `100 * 5% = 5`
4. Decimal calculations: `3.14 * 2 = 6.28`

## 🎨 Design Details

The calculator features a modern, sleek design with:

- **Dark Theme**: A sophisticated dark color scheme with purple accents
- **Gradient Background**: Subtle radial gradient for visual depth
- **Rounded Buttons**: Fully rounded buttons with hover effects
- **Typography**: Clean, readable font for calculations
- **Responsive Layout**: Adapts to different screen sizes
- **Hidden Scrollbars**: Clean UI with custom scrollbar styling

## 🛠️ Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Geist Font](https://vercel.com/font)** - Modern, versatile typeface by Vercel

## 📝 Project Structure

```
calculator/
├── public/            # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.js    # Root layout component
│   │   └── page.js      # Calculator component
│   └── ...
├── .next/             # Next.js build output
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## 🔄 Development Workflow

1. Make changes to the code
2. The page auto-updates as you edit files
3. Use the following commands for development:
   - `npm run dev` - Start development server
   - `npm run build` - Build for production
   - `npm run start` - Start production server
   - `npm run lint` - Run ESLint

## 🚀 Deployment

The easiest way to deploy this calculator app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the calculator.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) for the amazing React framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for the Geist font and hosting platform

---

<p align="center">
  Made with ❤️ by Gteck45
</p>
