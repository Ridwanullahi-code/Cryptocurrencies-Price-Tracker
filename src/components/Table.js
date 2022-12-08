import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const { data } = props;
  const ls = ['Symbol', 'Supply', 'Maximum', 'Market Cap', 'Volume', 'Price'];

  return (
    <section>
      <h3 className="p-two white">Bitcoin Breakdown</h3>
      <table className="mission-table white">
        <tbody>
          {ls.map((d, index) => (
            <tr key={d.id}>
              <th className="p-two">{d}</th>
              <td className="p-two">
                <span>
                  {Object.values(data[0])[index + 4]}
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

// props validation should be propTypes
Table.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Table;
