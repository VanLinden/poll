import React, { useState } from 'react';
import $ from 'jquery';
import './Questionary.css';
import { Link } from 'react-router-dom';

function Questionary() {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [age, setAge] = useState('');
    const [errorSurname, setErrorSurname] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorPatronymic, setErrorPatronymic] = useState('');
    const [errorAge, setErrorAge] = useState('');
    const [childName1, setChildName1] = useState('');
    const [childAge1, setChildAge1] = useState('');
    const [childName2, setChildName2] = useState('');
    const [childAge2, setChildAge2] = useState('');
    const [childName3, setChildName3] = useState('');
    const [childAge3, setChildAge3] = useState('');
    const [childName4, setChildName4] = useState('');
    const [childAge4, setChildAge4] = useState('');
    const [childName5, setChildName5] = useState('');
    const [childAge5, setChildAge5] = useState('');

    const blurSurnameValue = e => {
        if (e.currentTarget.value.length < 3) {
            setErrorSurname("Surname must be at least 3 symbols");
        } else {
            setErrorSurname('');
        }
    }
    const blurNameValue = e => {
        if (e.currentTarget.value.length < 3) {
            setErrorName("Name must be at least 3 symbols");
        } else {
            setErrorName('');
        }
    }
    const blurPatronymicValue = e => {
        if (e.currentTarget.value.length < 3) {
            setErrorPatronymic("Patronymic must be at least 3 symbols");
        } else {
            setErrorPatronymic('');
        }
    }
    const blurAgeValue = e => {
        if (e.currentTarget.value < 10) {
            setErrorAge("Age must be greater then 10");
        } else {
            setErrorAge('');
        }
    }
    var childCount = 0;
    var count = 1;
    var childindexes = [];
    
    return (
        <div className="mat-card-questinary">
            <div className="title">Questionary</div>

            <div style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}>Surname</div>
            <input id='surname' type="text" style={{ marginLeft: '10px' }} className="inputSurname" onBlur={blurSurnameValue} />
            <div className="error" >{errorSurname}</div>

            <div className="subtitle1" style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}>Name</div>
            <input id='name' type="text" style={{ marginLeft: '10px' }} className="inputSurname" onBlur={blurNameValue} />
            <div className="error" >{errorName}</div>

            <div className="subtitle1" style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}>Patronymic</div>
            <input id='patronymic' type="text" style={{ marginLeft: '10px' }} className="inputSurname" onBlur={blurPatronymicValue} />
            <div className="error" >{errorPatronymic}</div>

            <div className="subtitle1" style={{ display: 'inline-block', width: '80px', textAlign: 'right' }}>Age</div>
            <input id='age' type="text" style={{ marginLeft: '10px' }} className="inputSurname" onBlur={blurAgeValue} />
            <div className="error" >{errorAge}</div>

            <div className="title">Children</div>

            <button className="add-button"
                onClick={() => {
                    childCount = document.getElementById("children").childElementCount;
                    if (childCount < 5) {
                        // eslint-disable-next-line no-useless-concat
                        $('#children').append('<span></br><div class="name">Name</div> <input id="name' + count + '" class="childName" type="text"/>' +
                            '<div style="width: 30px; display: inline-block; padding-left: 20px;">Age</div> <input id="age' + count + '" style="width: 20px;" type="text"/>' +
                            '<button type="button" style="margin-left: 20px;" onClick="return this.parentNode.remove();" >-</button></span>');
                        childindexes.push(count);
                        count++;
                    };
                }} >+</button>
                
            <div id='children'></div>
            
            <button className="ok-button"
                onClick={() => {
                    if (errorSurname === "" && errorName === "" && errorPatronymic === "" && errorAge === "") {
                        setSurname($('#surname').val());
                        setName($('#name').val());
                        setPatronymic($('#patronymic').val());
                        setAge($('#age').val());
                    }
                    
                    if ($('#name1').val() !== undefined) {
                        setChildName1($('#name1').val());
                        setChildAge1($('#age1').val());
                    }
                    if ($('#name2').val() !== undefined) {
                        setChildName2($('#name2').val());
                        setChildAge2($('#age2').val());
                    }
                    if ($('#name3').val() !== undefined) {
                        setChildName3($('#name3').val());
                        setChildAge3($('#age3').val());
                    }
                    if ($('#name4').val() !== undefined) {
                        setChildName4($('#name4').val());
                        setChildAge4($('#age4').val());
                    }
                    if ($('#name5').val() !== undefined) {
                        setChildName5($('#name5').val());
                        setChildAge5($('#age5').val());
                    }
                }} >Save</button>

            <Link className="view-button" to={{ pathname: '/Viewing', state: { surname: surname, name: name, patronymic: patronymic, age: age,
                childName1: childName1, childAge1: childAge1, childName2: childName2, childAge2: childAge2,
                childName3: childName3, childAge3: childAge3, childName4: childName4, childAge4: childAge4,
                childName5: childName5, childAge5: childAge5} }}>Viewing</Link>
        </div>
    )
}
export default Questionary
