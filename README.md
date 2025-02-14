<h1 align="center">Baya E-commerce Clone Website</h1>

## Contents

- [Brief description](#brief-description)
- [Technologies](#technologies)
- [Overview](#overview)
- [Images](#images)
- [Installation and setup](#installation-and-setup)
- [Contact](#contact)

## Brief description

- This is Baya Clone Website built with MERN stack.
- Project link (GitHub): [ecommerce](https://github.com/hatuan1423/ecommerce)
- Project's author: Duong Ha Tuan

## Technologies

- Frontend: ReactJS, TailwindCSS, Ant Design, Redux Toolkit, React Router, React Hook Form
- Backend: NodeJS, ExpressJS, MongoDB
- Authentication: JSON Web Tokens (JWT), TwoFactor Authentication, email verification

## Project details

- User Registration with email verification/Login
- Product Management
- Shopping Cart & Checkout
- Product Filtering & Search
- Place an order
- Admin management
- Upload files with Cloudinary storage service

## Overview

1. Home page
   ![Home](https://res.cloudinary.com/duktr2ml5/image/upload/v1739466049/home_a8ccwn.png)

2. Register page
   ![Register](https://res.cloudinary.com/duktr2ml5/image/upload/v1739465939/register_cfjhzs.png)

3. Login page
   ![Login](https://res.cloudinary.com/duktr2ml5/image/upload/v1739465935/login_su5aal.png)

4. Collection page
   ![Product](https://res.cloudinary.com/duktr2ml5/image/upload/v1739465937/collection_mnhdx1.png)

5. Product detail page
   ![Product detail](https://res.cloudinary.com/duktr2ml5/image/upload/v1739465937/product_detail_tmmeif.png)

6. Cart page
   ![Cart](https://res.cloudinary.com/duktr2ml5/image/upload/v1739465935/cart_rxihce.png)

7. Checkout page
   ![Checkout](https://res.cloudinary.com/duktr2ml5/image/upload/v1739465934/checkout_gque03.png)

## Installation and setup

1. Clone the repository

```bash
git clone https://github.com/hatuan1423/ecommerce.git
```

2. Install dependencies & run project

- Frontend

```bash
cd client
npm i
npm run dev
```

- Backend

```bash
cd server
npm i
npm run dev
```

3. Environment setup

Create a `.env` file in the folder /src:

- Frontend

```env
VITE_PROVINCE_API=api province
VITE_BASE_URL=backend api url
VITE_X_API_KEY=x-api-key
```

- Backend

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

- Email: dhtuan198@gmail.com
- GitHub: https://github.com/hatuan1423
