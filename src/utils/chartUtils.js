export const getRevenueByMonth = (products, carts) => {

    const monthOrder = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
    ];

    const priceMap = products.reduce((acc, product) => {
        acc[product.id] = product.price;
        return acc;
    }, {})

    console.log(priceMap);
    const revenueByMonthData = carts.reduce((acc, cart) => {
        const month = new Date(cart.date).toLocaleString('default', { month: 'short' });

        if(!acc[month]) {
            acc[month] = 0;
        }

        const totalCartValue = cart.products.reduce((total, product) => {
            const price = priceMap[product.productId] || 0;
            return total + (price * product.quantity);
        }, 0);

        acc[month] += totalCartValue;

        return acc;

    }, {});

    console.log(revenueByMonthData);


    return Object.entries(revenueByMonthData)
    .sort(([a], [b]) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
    .map(([month, revenue]) => ({ month, revenue }));
}

export const getCategoryChart = (products) => {
    return  Object.entries(products.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
        }, {}))
        .map(([category, count]) => ({ category, count }));
}


export const getPriceDistribution = (products) =>{
    const ranges = {
        "0-100": 0,
        "101-200": 0,
        "201-300": 0,
        "301-above": 0
    };

    const priceDistribution = products.reduce((acc, product) => {
        const price = product.price;

        if (price <= 100) acc["0-100"]++;
        else if (price <= 200) acc["101-200"]++;
        else if (price <= 300) acc["201-300"]++;
        else acc["301-above"]++;

        return acc;
    }, ranges)

    return Object.entries(priceDistribution).map(([range, count]) => ({ range, count })); 
}