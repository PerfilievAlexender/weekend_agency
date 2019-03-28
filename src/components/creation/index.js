import React, {Component} from 'react';
import './style.css';
import {connect} from 'react-redux';
import {createRabbit} from '../../action-creators';
import {token} from "../../selectors";
import {numbers} from '../../utils'

class Creation extends Component {

    state = {
        name: '',
        weight: ''
    };

    render() {
        return (
           <section className='creation-rabbit'>
               <div className='creation-rabbit__wrapper'>
                   <h2 className='creation-rabbit__title'>Создадим кролика</h2>
                   <label htmlFor="creationRabbitName">Имя
                       <input
                           type="text"
                           onChange={this.onHandleChangeName}
                           id='creationRabbitName'
                           name='creationRabbitName'
                           value={this.state.name}
                           placeholder='Введите имя'
                           required
                       />
                   </label>
                   <label htmlFor="creationRabbitWeight">Вес
                       <input
                           type="text"
                           onChange={this.onHandleChangeWeight}
                           id='creationRabbitWeight'
                           name='creationRabbitWeight'
                           value={this.state.weight}
                           placeholder='Введите вес'
                           required
                       />
                   </label>

                   <button
                       type='submit'
                       className="creation-rabbit__sent  btn"
                       onClick={this.onCreateRabbit}
                   >
                       Создать
                   </button>
               </div>
           </section>
        );
    };

    onHandleChangeName = (evt) => {
        this.setState({
            name: evt.target.value
        })
    };

    onHandleChangeWeight = (evt) => {

        this.setState({
            weight: numbers(evt.target.value)
        })
    };

    onCreateRabbit = (evt) => {

        evt.preventDefault();

        const {createRabbit, tokenData} = this.props;

        if (this.state.name && this.state.weight) {
            createRabbit(this.state, tokenData);
        }

        this.setState({
            name: '',
            weight: ''
        });
    };

}


export default connect(
    (store) => ({
        tokenData: token(store),
    }),
    {createRabbit}
)(Creation)