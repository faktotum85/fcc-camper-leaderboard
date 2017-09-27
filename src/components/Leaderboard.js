import React from 'react';

import Camper from './Camper';

class Leaderboard extends React.Component {

  sortByAlltime() {
    this.props.sortBy("alltime");
  }

  sortByRecent() {
    this.props.sortBy("recent");
  }

  render() {
    const sortedByRecent = this.props.sortedBy === 'recent' ? '▼' : '';
    const sortedByAlltime = this.props.sortedBy === 'alltime' ? '▼' : '';
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th>
                <a onClick={this.sortByRecent.bind(this)}>
                  Points in past 30 days
                  {sortedByRecent}
                </a>
              </th>
              <th>
                <a onClick={this.sortByAlltime.bind(this)}>
                  All time points
                  {sortedByAlltime}
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.campers.map((camper, index) => <Camper camper={camper} index={index} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Leaderboard;
