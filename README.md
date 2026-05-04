# Store Metrics Admin Dashboard

A modern, responsive **Admin Dashboard** built with React that simulates real-world e-commerce management. It provides insights into products, users, and carts using data from FakeStore API.

---

## Live Demo

> storemetrics.netlify.app

---

## Project Overview

Store Metrics is designed to mimic a real admin panel where you can:

* View analytics and statistics
* Manage products
* Monitor users
* Inspect cart activity

This project focuses on **clean UI, state management, and scalable architecture**.

---

## Features

### Products

* View all products
* Add new product (UI simulation)
* Edit product via modal
* Delete product
* Search & filter functionality
* Pagination

### Users

* View users list
* Activate / Deactivate users
* Delete users
* Success feedback (UI alerts)

### Carts

* View cart list
* See cart details (products, quantity, totals)
* Modal for expanded cart view

### Dashboard

* Key metrics and statistics
* Clean visual layout

---

## Tech Stack

* **Frontend:** React, JavaScript (ES6+)
* **Styling:** CSS (Custom, responsive design)
* **State Management:** React Context API
* **API:** FakeStore API
* **Routing:** React Router
* **Build Tool:** Vite

---

## Project Structure

```
src/
│── components/
│── context/
│── hooks/
│── pages/
│── services/
│── utils/
```

---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/jaysquare24/Admin_dashboard.git
```

2. Navigate into the project:

```bash
cd Admin_dashboard
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

---

## API Used

* https://fakestoreapi.com/

> Note: This API does not persist data.
> Actions like "Add Product" are simulated on the frontend.

---

## Key Learning Highlights

* Custom hooks for data fetching
* Managing multiple async data sources
* UI state synchronization (loading, error, success)
* Modal architecture
* Responsive dashboard layout
* Component reusability

---

## Limitations

* No real backend (data is not persisted)
* Authentication not implemented
* Limited to demo-scale data

---

## Future Improvements

* Add authentication system
* Integrate real backend (Node.js / Firebase)
* Role-based access control
* Charts (e.g. sales trends)
* Dark mode

---

## Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

---

## License

This project is open-source and available under the MIT License.

---

## Acknowledgements

* FakeStore API for mock data
* Inspiration from Uizard for UI design
* Inspiration from real-world admin dashboards

---

## Author

**Jamiu Olajide**

* GitHub: https://github.com/jaysquare24 
* LinkedIn: https://www.linkedin.com/in/jamiu-olajide-795444185
* Portfolio: https://olajidejamiu.netlify.app/ 

