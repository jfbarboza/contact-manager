import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../context.js'
import { getValue } from '@testing-library/user-event/dist/utils';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Contact extends Component {

  state = {
    showContactInfo: false  
  }
  onShowClick = e =>{
    this.setState({ showContactInfo: 
    !this.state.showContactInfo })
  }

  onDeleteClick = async (id, dispatch) => {
      try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({type: 'DELETE_CONTACT', payload: id})  
      }catch(e){
        dispatch({type: 'DELETE_CONTACT', payload: id}); 
      }   
  }

  render() {
    
    const { showContactInfo } = this.state
    const {contact} = this.props;

    return (
        <Consumer>
          { value =>{
              const { dispatch } = value;
              return(
                <div className='card card-body mb-3'>
                    <h4>
                        {contact.name} <i onClick={this.onShowClick}
                        className="fas fa-sort-down"
                        style={{ cursor: 'pointer'}}></i>
                        
                        <i onClick={this.onDeleteClick.bind(this, contact.id, dispatch )}
                        className="fas fa-times" 
                        style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
                        <Link to={`contact/edit/${contact.id}`}>
                          <i 
                            className="fas fa-pencil-alt"
                            style={{
                              cursor: 'pointer',
                              float: 'right',
                              color: 'black',
                              marginRight: '1rem'
                            }}
                          >
                            
                          </i>
                        </Link>
                        
                    </h4>
                    {showContactInfo ? (<ul className='list-group'>
                        <li className='list-group-item'>Email: {contact.email}</li>
                        <li className='list-group-item'>Phone: {contact.phone}</li>
                    </ul>) : null}
                    
                </div>
              );
             
          } }  
        </Consumer>
      
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact;