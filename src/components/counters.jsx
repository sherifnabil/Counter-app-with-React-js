import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   

    render() { 
        const { onDelete, onIncrement, onReset, counters } = this.props;
        return (
            <div>
                <button 
                    onClick={ onReset} 
                    className="btn m-2 btn-primary"
                >Reset</button>

                { counters.map( 
                    counter => (
                    <Counter 
                    key={ counter.id } 
                    onDelete={ onDelete } 
                    onIncrement={onIncrement}
                    counter={ counter } 

                    /> 
                    ) ) }
                

            </div>  
        );
    }
}
 
export default Counters;
