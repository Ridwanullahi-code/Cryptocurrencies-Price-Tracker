import React from 'react';
import { useLocation } from 'react-router-dom';

function Table() {
  const { state } = useLocation();
  const data = state.crypto;
  const ls = ['Symbol', 'Supply', 'Maximum', 'Market Cap', 'Volume', 'Price'];

  return (
    <section>
      <h4 className="p-two white">Bitcoin Breakdown</h4>
      <table className="mission-table white">
        <tbody>
          {ls.map((d, index) => (
            <tr key={d.id}>
              <th className="p-two">{d}</th>
              <td className="p-two">
                <span>
                  {Object.values(data[0])[index + 3]}
                  K
                </span>
                <i
                  className="fa-solid fa-circle-arrow-right icon"
                  style={{ marginLeft: '5px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-two">
        <a href={data[0].explorer} className="web-btn white font-4">
          Website
        </a>
      </div>
    </section>
  );
}

export default Table;
