import React from "react";
import { useState } from "react";
function Task1() {
    const [data, setdata] = useState([{
        name: "kishore",
        id: 10,
    },
    {
        name: "Akash",
        id: 12,
    },
    {
        name: "Vikas",
        id: 13,
    }
    ]);
    const [data1, setdata1] = useState([]);
    console.log(data1);
    return (
        <div>
            <div>
                {data.map((e, i) => {
                    return (
                        <ul key={i}>
                            <li>
                                {e.name}
                                <input type="checkbox" onChange={() => { setdata1([{ nam: e.name, i: e.id }]) }} />
                            </li>
                        </ul>
                    );
                })}
            </div>
            <div>
                {
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data1.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{e.nam}</td>
                                        <td>{e.i}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
}
export default Task1;