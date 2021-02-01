import React, {Component} from 'react';
import {Button} from "antd";
import {connect} from 'react-redux';
import {decrement, increment} from "../actionCreators/counterActions";

class CounterContainer extends Component {

    render() {
        const {counter, increment, decrement} = this.props;
        return(
            <div>
                <h2>{counter}</h2>
                <Button
                   onClick={() => increment()}
                >
                    +1</Button>
                <Button
                    onClick={() => decrement()}
                >
                    -1</Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);