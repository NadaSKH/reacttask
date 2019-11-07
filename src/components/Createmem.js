import React, { Component } from "react";

class Createmem extends Component {
    constructor(props) {
        super(props);
        this.state = { value: " "};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value},
     );
      }
    
      handleSubmit(event) {
        
      }
      addMember = () => {
          this.setState(state=> {
              const crew = state.crew.concat(state.value);
          })

      }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    Member Name:<br /> <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <br />
                    Member committee:<br /> <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <br />
                    Member Id:<br /> <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <br />
                    <input type="button" value="Submit"/>

                </form>

            </div>
        );

    }
}

export default Createmem;