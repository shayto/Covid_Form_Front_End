import React, {useState} from 'react';
import classes from './RegistrationForm.module.css';
import './style.css'
import axios from "axios";
export default function RegistrationForm(props) {

    const [first_name, setFirst_name] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [birthdate, setBirthDate] = useState(null);
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState('Vasco Da Gama');
    const [zip_code, setZipcode] = useState(null);
    const [landline, setLandline] = useState(null);
    const [cell_phone, setCell] = useState(null);
    const [been_infected, setChecked] = useState(false);
    const [allergy, setAllergy] = useState(false);
    const [cardio, setCardio] = useState(false);
    const [diabetes, setDia] = useState(false);
    const [other, setOther] = useState('');
    const [isError, setIsError] = useState(false);

    const handleInputChange = (e) => {
        const {id, value} = e.target;

        if (id === "firstName") {
            setFirst_name(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "birthdate") {
            setBirthDate(value);
        }
        if (id === "address") {
            setAddress(value);
        }
        if (id === "city") {
            setCity(value);
        }
        if (id === "zipcode") {
            setZipcode(value);
        }
        if (id === "landline") {
            setLandline(value);
        }
        if (id === "cellularphone") {
            setCell(value);
        }
        if (id === "infected") {
            setChecked(!been_infected);
        }
        if (id === "allergies") {
            setAllergy(!allergy);
        }
        if (id === "vascular") {
            setCardio(!cardio);
        }
        if (id === "diabetes") {
            setDia(!diabetes);
        }
        if (id === "other") {
            setOther(value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let conditions = "";
        if (allergy)
            conditions += 'allergy, ';
        if (cardio)
            conditions += 'cardio, ';
        if (diabetes)
            conditions += 'diabetes, ';
        conditions += other;
        console.log("consitions are:", conditions);
        const sendData = {
            first_name, last_name, birthdate, address, city, zip_code, landline, cell_phone, been_infected, conditions
        }
        console.log(sendData);
        // Send the data to the back end
        setIsError(false);
        try {
            await axios.post('http://localhost:8000/patient', sendData);
        } catch (e) {
            setIsError(true);
        }
    }

    return (
        <div className="form" >
            <img className={classes.center} style={{
                height: 350,
                width: 400,
                justifyContent: 'center'
            }}
                 src='https://c.tenor.com/wS8yHuPs3wMAAAAi/for-my-family-my-community-and-me.gif'
                 alt="picture not available at the moment.."/>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className="form-body" >
                    <div className="row container-fluid">
                        <div className="col-12 col-md-6">
                            <div className={classes.control}>
                                <label className="form__label" for="firstName">First Name </label>
                                <input className="form__input" type="text" id="firstName"
                                       onChange={(e) => handleInputChange(e)} required pattern="[^0-9]*"
                                       placeholder="First Name"/>
                            </div>
                            <div className={classes.control}>
                                <label className="form__label" for="lastName">Last Name </label>
                                <input type="text" name="" id="lastName" className="form__input"
                                       onChange={(e) => handleInputChange(e)} required pattern="[^0-9]*"
                                       placeholder="LastName"/>
                            </div>
                            <div className={classes.control}>
                                <label className="form__label" for="birthdate">Date of Birth </label>
                                <input type="date" name="" id="birthdate" className="form__input"
                                       onChange={(e) => handleInputChange(e)} required placeholder="dd/mm/yyyy"/>
                            </div>
                            <div className={classes.control}>
                                <label className="form__label" for="address">Address </label>
                                <input type="text" name="" id="address" className="form__input"
                                       onChange={(e) => handleInputChange(e)} required placeholder="Address"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className={classes.control}>
                                <label className="form__label" for="city">City </label>
                                <select className="form-select my-3" aria-label="Default select example"
                                        onChange={(e) => setCity(e.target.value)}>
                                    <option value="Vasco Da Gama">Vasco Da Gama</option>
                                    <option value="Gangtok">Gangtok</option>
                                    <option value="Aurangabad">Aurangabad</option>
                                    <option value="Jehanabad">Jehanabad</option>
                                    <option value="Tezpur">Tezpur</option>
                                    <option value="Buxar">Buxar</option>
                                    <option value="Amaravati">Amaravati</option>
                                    <option value="Tadepalligudem">Tadepalligudem</option>
                                    <option value="Kavali">Kavali</option>
                                    <option value="Ballia">Ballia</option>
                                </select>
                            </div>
                            <div className={classes.control}>
                                <label className="form__label" for="zipcode">Zipcode </label>
                                <input type="text" id="zipcode" className="form__input "
                                       onChange={(e) => handleInputChange(e)} placeholder="Zipcode"/>
                            </div>
                            <div className={classes.control}>
                                <label className="form__label" for="landline">Landline </label>
                                <input type="text" id="landline" className="form__input"
                                       onChange={(e) => handleInputChange(e)} required placeholder="Landline"/>
                            </div>
                            <div className={classes.control}>
                                <label className="form__label" for="cellularphone">Cellular Phone </label>
                                <input type="text" id="cellularphone" className="form__input"
                                       onChange={(e) => handleInputChange(e)} required placeholder="Cellular Phone"/>
                            </div>
                            <div className={classes.control}>
                                <label className="form__label" for="infected">been infected by COVID-19 </label>
                                <input type="checkbox" id="infected" onChange={(e) => handleInputChange(e)}
                                       className="form__input"/>
                            </div>
                            <div className={classes.control}>
                                <h4>Previous Conditions:</h4>
                            </div>
                            <label className="form__label" for="conditions">Diabetes </label>
                            <input className="form__input" type="checkbox" id="diabetes"
                                   onChange={(e) => handleInputChange(e)} placeholder="conditions"/>
                            <br></br>
                            <label className="form__label" for="conditions">Cardio-Vascular problems </label>
                            <input className="form__input" type="checkbox" id="vascular"
                                   onChange={(e) => handleInputChange(e)} placeholder="conditions"/>
                            <br></br>
                            <label className="form__label" for="conditions">Allergies </label>
                            <input className="form__input" type="checkbox" id="allergies"
                                   onChange={(e) => handleInputChange(e)} placeholder="conditions"/>
                            <br></br>
                            <label className="form__label" for="conditions">Other </label>
                            <input className="form__input" type="text" id="other" onChange={(e) => setOther(e.target.value)}
                                   placeholder="conditions"/>
                        </div>
                        <div class="footer">
                            <div className={classes.actions}>
                                <button type="submit" class="btn">Register</button>
                                {isError && <div>Something went wrong please check your internet connection...</div>}
                            </div>
                        </div>
                    </div>
                </div>
</form>
</div>
)
}