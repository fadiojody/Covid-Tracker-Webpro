// import React from 'react';

// //Pertemuan 21
// const Card = (props) => {
//     return (
//     <div className="card-container">
//       <p>{props.name}</p>
//       <p>{props.institution}</p>
//       <p>{props.address}</p>
//       <p>{props.phoneNumber}</p>
//     </div>
//     );
//   };

//   export default Card;

import React from 'react';

const Card = ({name, username, email, phone}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

export default Card;