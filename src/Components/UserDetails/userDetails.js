import React from 'react';
import './userDetails.css';

export default class UserDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Amelia",
      contractVal: true,
      country: "United Kingdom"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="detailsPage">
        <h1>User details page</h1>
        <form>
          <div className="container">
            <div className="form-row">
              <div className="row form-group textRow">
                <label className="col-sm-3 col-form-label">Name </label>
                <input className="col-sm-9" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="row form-group radioRow">
                <div className="col-sm-3">
                  <span className="form-check-label">Type of Contract</span>
                </div>
                <div className="col-sm-9">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="optradio" checked={this.state.contractVal} onChange={this.handleChange} />
                    <label className="form-check-label">Consultant</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="optradio" onChange={this.handleChange} />
                    <label className="form-check-label">Permanent</label>
                  </div>
                </div>
              </div>

              <div className="row form-group stateRow">
                <label className="col-sm-3 form-check-label">Country of Residence</label>
                <select className="col-sm-9 form-control" value={this.state.country} onChange={this.handleChange}>
                  <option value="UK">United Kingdom</option>
                  <option value="It">Italy</option>
                  <option value="NL">Netherlands</option>
                  <option value="FR">France</option>
                </select>
              </div>

            </div>
          </div>

        </form>
      </div>
    );
  }
}

