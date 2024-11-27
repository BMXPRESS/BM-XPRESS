// Data for the dashboard
const dashboardData = {
    totalDeliveries: 500,
    pendingOrders: 150,
    completedDeliveries: 350,
    recentOrders: [
        { id: 'ORD123', customer: 'John Doe', status: 'Delivered', date: '2024-11-20' },
        { id: 'ORD124', customer: 'Alice Smith', status: 'Pending', date: '2024-11-21' },
        { id: 'ORD125', customer: 'Bob Johnson', status: 'Delivered', date: '2024-11-19' },
    ]
};

// Display stats on the dashboard
document.getElementById('total-deliveries').innerText = dashboardData.totalDeliveries;
document.getElementById('pending-orders').innerText = dashboardData.pendingOrders;
document.getElementById('completed-deliveries').innerText = dashboardData.completedDeliveries;

// Populate recent orders
const ordersTableBody = document.querySelector('.orders tbody');
dashboardData.recentOrders.forEach(order => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.status}</td>
        <td>${order.date}</td>
        <td><button class="action-btn">Update</button></td>
    `;
    ordersTableBody.appendChild(row);
});

// Create the delivery analytics chart using Chart.js
const ctx = document.getElementById('deliveryChart').getContext('2d');
const deliveryChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Delivered', 'Pending'],
        datasets: [{
            label: 'Deliveries',
            data: [dashboardData.completedDeliveries, dashboardData.pendingOrders],
            backgroundColor: ['#0066cc', '#ff9900'],
            borderColor: ['#005bb5', '#e68a00'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
