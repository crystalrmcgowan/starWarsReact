import React, { Component } from "react"

class Vehicles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/vehicles/")
      .then(r => r.json())
      .then(({ results }) => {
        console.log("Data from componentWillMount fetch")
        this.setState({ vehicles: results })
      })
  }

  render() {
    let vehicles = this.state.vehicles.map(vehicle => {
      return (
        <section className="vehicleCards" key={vehicle.name}>
          <p>
            {vehicle.name}
          </p>
          <p>
            {" "}Model: {vehicle.model}
          </p>
          <div className="specs">
            <p>Specs</p>
            <ul>
              <li>
                Manufacturer: {vehicle.manufacturer}
              </li>
              <li>
                Class: {vehicle.vehicle_class}
              </li>
              <li>
                Passengers: {vehicle.passengers}
              </li>
              <li>
                Crew: {vehicle.crew}
              </li>
              <li>
                Length: {vehicle.length}
              </li>
              <li>
                Max Speed: {vehicle.max_atmosphering_speed}
              </li>
              <li>
                Cargo Capacity: {vehicle.cargo_capacity}
              </li>
            </ul>
          </div>
        </section>
      )
    })
    return (
      <div className="allVehicles">
        {vehicles}
      </div>
    )
  }
}

export default Vehicles
