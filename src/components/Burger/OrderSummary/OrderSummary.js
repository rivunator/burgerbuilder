import React, { Component } from 'react';

import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {
    componentWillUpdate() {
        console.log('[Ordersummary] will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });
        return (
            <Auxillary>
                <h3>Your Order</h3>
                <p>Delicious burger with the following ingredients:</p>
                <ul>
                    <li>{ingredientSummary}</li>
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}> Cancel </Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}> Continue </Button>
            </Auxillary>
        )
    }
}

export default orderSummary;