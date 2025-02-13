# E-commerce

## Introduction

> This is an e-commerce project built with React for the frontend and Node.js for the backend. The project supports features such as product management, shopping cart, checkout, create order and user authentication.

## Tech stacks

- **Frontend:** ReactJS, TailwindCSS, Ant Design, Redux Toolkit, React Router, React Hook Form
- **Backend:** NodeJS, ExpressJS, MongoDB
- **Authentication:** JSON Web Tokens (JWT), 2FA, OTP

## Features

- User Registration/Login
- Product Management
- Shopping Cart & Checkout
- Product Filtering & Search
- Admin Order Management

## Overview website

> Home
> ![Home](/uploads/home.png)

> Register
> ![Register](/client/public/register.png)

> Login
> ![Login](/client/public/login.png)

> Collection
> ![Product](/client/public/collection.png)

> Product
> ![Product](/client/public/home.png)

> Product Detail
> ![Product](/client/public/product_detail.png)

> Cart
> ![Cart](/client/public/cart.png)

> Checkout
> ![Checkout](/client/public/checkout.png)

## Installation & Setup

### 1: Clone the Repository

```bash
git clone https://github.com/hatuan1423/ecommerce.git
```

### 2️: Install Dependencies & Run project

#### Frontend

```bash
cd client
npm i
npm run dev
```

#### Backend

```bash
cd server
npm i
npm run dev
```

## 3: Environment Setup

Create a `.env` file in the folder /src:

#### Frontend

```env
VITE_PROVINCE_API=api province
VITE_BASE_URL=backend api url
VITE_X_API_KEY=x-api-key
```

#### Backend

```env
DEV_APP_PORT=server port
DEV_DB_HOST=your db host
DEV_DB_PORT=your db port
DEV_DB_NAME=your db name

EMAIL_NAME=your gmail
EMAIL_APP_PASSWORD=your password app gmail

CLOUDINARY_NAME=your cloudinary name
CLOUDINARY_API_KEY=your cloudinary api key
CLOUDINARY_API_SECRET=your cloudinary api secret

NAME_SERVICE_2FA = your name service for twofactor authen

```

## Contact

- **Email:** dhtuan198@gmail.com
- **GitHub:** https://github.com/hatuan1423
