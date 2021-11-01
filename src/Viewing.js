import React from 'react';
import './Viewing.css';
import { Link } from 'react-router-dom';

function Viewing(props) {
    return (
        <div className="mat-card-questinary">
            <div className="title">Viewing</div>
            <div>
                <span className="name">Surname</span>
                <span className="inputName">{props.location.state.surname}</span>
            </div>
            <div>
                <span className="name">Name</span>
                <span className="inputName">{props.location.state.name}</span>
            </div>
            <div>
                <span className="name">Patronymic</span>
                <span className="inputName">{props.location.state.patronymic}</span>
            </div>
            <div>
                <span className="name">Age</span>
                <span className="inputName">{props.location.state.age}</span>
            </div>

            <div className="title">Children</div>
                {props.location.state.childName1 !== '' && <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {props.location.state.childName1} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {props.location.state.childAge1} </span>
                </div>}
            
                {props.location.state.childName2 !== '' && <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {props.location.state.childName2} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {props.location.state.childAge2} </span>
                </div>}
            
                {props.location.state.childName3 !== '' && <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {props.location.state.childName3} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {props.location.state.childAge3} </span>
                </div>}
            
                {props.location.state.childName4 !== '' && <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {props.location.state.childName4} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {props.location.state.childAge4} </span>
                </div>}
            
                {props.location.state.childName5 !== '' && <div>
                    <span className="name">Name</span>
                    <span className="inputName"> {props.location.state.childName5} </span>
                    <span className="name">Age</span>
                    <span className="inputName"> {props.location.state.childAge5} </span>
                </div>}

                <Link className="view-button" to={{ pathname: '/'} }>Questionary</Link>                
        </div>
    )
}

export default Viewing