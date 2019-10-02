
##The Zebra Code Challenge

### Configuration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Approach

### Technologies Used

### Real World Application

* With an active API endpoint, I would have made App a class component and I would have done the following -
 Note: I would need to update .babelrc for this to work when not using `create-react-app`
 ```
   async componentDidMount() {
     try {
       const response = await fetch('https://activeurl.com');
       if (!response.ok) {
         throw Error(response.statusText);
       }
       const json = await response.json();
       this.setState({carrierCards: json.carrier_cards, carriersSearched: json.carriers_searched, searchTime: json.search_time});
     } catch (error) {
       console.log(error);
       //show user helpful message
     }
   }
```

* State Management - To keep this application simple, I decided to traditionally pass props from parent to child components. For a large, on the job application, I would most likely use Redux to more efficiently manage my state. 

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

