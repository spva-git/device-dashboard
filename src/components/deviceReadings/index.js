import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from "match-sorter";
class DeviceReadings extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.val = "";
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  onRowClick(e, t, rowInfo) {
    console.log('it produced this event:', e)
    this.setState(oldState => {
      let data = oldState.data.slice();
      let copy = Object.assign({}, data[rowInfo.index]);
      copy.id = "Changed";
      copy.selected = true;
      copy.id = "selected";
      data[rowInfo.index] = copy;

      return {
        data: data
      };
    });
  }
  render() {
    const { activeCount, inactiveCount } = this.props.entries;
    return (
      <div>
         <div>
          <h1>Relayr Device Dashboard </h1>
          <h5>Active: {activeCount}  | Inactive: {inactiveCount} </h5>
        </div>
        <ReactTable
          data={this.props.entries.data}
          getTrProps={(state, rowInfo, column) => {
            return {
              onClick: (e, t) => {
                this.onRowClick(e, t, rowInfo);
              }
            };
          }}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={[
            {
              Header: "Name",
              id: "name",
              accessor: d => d.name
            },
            {
              Header: "Unit",
              id: "unit",
              accessor: d => d.unit,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["unit"] }),
              filterAll: true
            },
            {
              Header: "Value",
              id: "value",
              accessor: d => d.value,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["value"] }),
              filterAll: true
            },
            {
              Header: "TimeStamp",
              id: "timestamp",
              accessor: d => d.timestamp,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["timestamp"] }),
              filterAll: true
            },
            {
                  Header: "Status",
                  accessor: "active",
                  id: "active",
                  Cell: row => (
                    <span>
                      <span style={{
                        color: row.value === false ? '#ff2e00'
                          : '#57d500',
                        transition: 'all .3s ease'
                      }}>
                        &#x25cf;
                      </span> {
                        row.value === true ? 'true'
                        : row.value === false ? `false`
                        : 'other'
                      }
                    </span>
                  ),
                  filterMethod: (filter, row) => {
                    if (filter.value === 'all') {
                      return true;
                    }
                    if (filter.value === "true") {
                      return row[filter.id] === true;
                    }
                    if (filter.value === "false") {
                      return row[filter.id] === false;
                    }
                  },
                  Filter: ({ filter, onChange }) =>
                    <select
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%" }}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value={true}>True</option>
                      <option value="false">False</option>
                    </select>
                }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default DeviceReadings;
