import React from 'react';

const MyListForm = ({ spot, idx }) => {
    const { PhotoURL, AverageCost, SpotName, TotalVisitor, TravelTime,
        Seasonality
    } = spot;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <tr>
                        <th>{idx + 1}</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default MyListForm;