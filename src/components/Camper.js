import React from 'react';

const Camper = (props) => {
  const index = props.index;
  const camper = props.camper;

  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <th>
        <img src={camper.img + "&s=30"} alt={camper.username} className="img-rounded camper-avatar"/>
        <a href={"https://www.freecodecamp.org/" + camper.username} target="_blank">{camper.username}</a>
      </th>
      <th>{camper.recent}</th>
      <th>{camper.alltime}</th>
    </tr>
  );

}

export default Camper;
