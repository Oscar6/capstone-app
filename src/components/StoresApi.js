// import React from 'react';

// class StoresApi extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         }

//     }

//     componentDidMount() {
//         fetch('../public/stores.json')
//             .then(res => res.json())
            
//             .then(json => {
//                 console.log(json)
//                 // this.setState({
//                 //     isLoaded: true,
//                 //     items: json,
//                 // })
//             });
//     }

//     render() {

//         var { isLoaded, items } = this.state;
//         if (!isLoaded) {
//             return <div>Loading..</div>;
//         }
//         else {

//             return (
//                 <div className="StoresApi">
                    // <ul>
                    //     {items.map(item => (
                    //         <li key={item.id}>
                    //         Store Name: {item.name} | Latitude: {item.lat} | Longitude: {item.lon}
                    //         </li>
                    //     ))};
                    // </ul>
//             </div>
//             );
//         }
//     }
// }

// export default StoresApi
