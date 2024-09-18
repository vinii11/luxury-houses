
const properties = [
    {id: 1, title: "Luxury Apartment", location: "New York", price: "$2000/month"},
    {id: 2, title: "Cozy Cottage", location: "San Francisco", price: "$1500/month"},
    {id: 3, title: "Beach House", location: "Miami", price: "$3000/month"},
];

const propertyContainer = document.getElementById('propertyContainer');

properties.forEach(property => {
    const propertyDiv = document.createElement('div');
    propertyDiv.classList.add('property-item');
    propertyDiv.innerHTML = `
        <h2>${property.title}</h2>
        <p>Location: ${property.location}</p>
        <p>Price: ${property.price}</p>
    `;
    propertyContainer.appendChild(propertyDiv);
});

const recommendedProperties = [];

function recommendProperties() {
    // Fetch user's browsing history from localStorage
    const history = JSON.parse(localStorage.getItem('viewedProperties')) || [];
    
    if (history.length > 0) {
        // Simple recommendation based on last viewed location
        const lastViewedLocation = history[history.length - 1].location;
        const recommendations = properties.filter(p => p.location === lastViewedLocation);
        
        // Display recommended properties
        const recommendationDiv = document.createElement('div');
        recommendationDiv.classList.add('recommendations');
        recommendationDiv.innerHTML = `<h3>Recommended Properties in ${lastViewedLocation}</h3>`;
        
        recommendations.forEach(property => {
            const recDiv = document.createElement('div');
            recDiv.classList.add('property-item');
            recDiv.innerHTML = `<h2>${property.title}</h2><p>Location: ${property.location}</p><p>Price: ${property.price}</p>`;
            recommendationDiv.appendChild(recDiv);
        });

        propertyContainer.appendChild(recommendationDiv);
    }
}

document.querySelectorAll('.property-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h2').textContent;
        const location = this.querySelector('p').textContent.split(": ")[1];
        
        // Store viewed properties in localStorage
        const history = JSON.parse(localStorage.getItem('viewedProperties')) || [];
        history.push({title, location});
        localStorage.setItem('viewedProperties', JSON.stringify(history));

        alert(`Viewed ${title}`);
    });
});

// Call the recommend function
recommendProperties();

