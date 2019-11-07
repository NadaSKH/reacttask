import React, {Component} from "react";

class Displaymem extends Component{
    render() {
        return (
            <div>
                <ul>
                {this.state.crew.map((i)=>(<li key = {i}>{i.name}</li> ))}
                </ul>   
            </div>
        );
    }
}

export default Displaymem;