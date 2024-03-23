import { useState } from "react";

const Survey = () => {
    return (
        <div className="survey">
            <section>
                <form>
                    <fieldset>
                        <h2>Create Account</h2>
                        <div className="first">
                            <label htmlFor="first-name">Fist name:</label>
                            <input 
                            type="text"
                            id="first-name"
                            name="first-name" 
                            required={true}
                            value={""}
                            />
                        </div>
                        <br />
                        <div className="last">
                            <label htmlFor="last-name">Last name:</label>
                            <input 
                            type="text" 
                            id="last-name"
                            name="last-name"
                            required={true}
                            value={""}
                            />
                        </div>
                        <br />
                        <div className="birth">
                            <label htmlFor="birthdate">Birthday</label>
                            <input 
                            type="number" 
                            id="birthdate"
                            name="birthdate"
                            required={true}
                            value={""}
                            />
                            <label htmlFor="birth-month">Month</label>
                            <input 
                            type="number" 
                            id="birth-month"
                            name="birth-month"
                            required={true}
                            value={""}
                            />
                            <label htmlFor="birth-year">Year</label>
                            <input 
                            type="number" 
                            id="birth-year"
                            name="birth-year"
                            required={true}
                            value={""}
                            />
                        </div>
                        <br />
                        <div className="gender">
                            <label htmlFor="gender">Gender:</label>
                            <input 
                            type="text"
                            id="gender" 
                            name="gender"
                            required="true"
                            value={""}
                            />
                        </div>
                        <br />
                        <div className="class-rank">
                            <label htmlFor="class-rank">Year:</label>
                            <select name="class-rank" id="class-rank">
                                <option value={"freshman"}>Freshman</option>
                                <option value={"sophmore"}>Sophmore</option>
                                <option value={"junior"}>Junior</option>
                                <option value={"senior"}>Senior</option>
                                <option value={"transfer"}>Transfer</option>
                                <option value={"graduate"}>Graduate</option>
                            </select>
                        </div>
                        <br />
                        <div className="major">
                            <label htmlFor="major">Major:</label>
                            <input 
                            type="text" 
                            name="major"
                            id="major"
                            value={""}
                            />
                        </div>
                        <br />
                        <div className="cleanliness">
                            <label htmlFor="cleanliness">How often do you shower?:</label>
                            <select name="cleanliness" id="cleanliness" required={true}>
                                <option value={"2-4"}>2-4 times a week</option>
                                <option value={"3-5"}>3-5 times a week</option>
                                <option value={"everyday"}>Everyday</option>
                            </select>
                        </div>
                        <br />
                        <div className="major-interest">
                            Does it matter that your roommate has the same/similar major as you
                            <br />
                            <input type="radio" name="major-intest" id="yes" value={"yes"} required={true}/>
                            <label htmlFor="yes">Yes</label>
                            <br />
                            <input type="radio" name="major-intest" id="no" value={"no"}/>
                            <label htmlFor="yes">No</label>
                        </div>
                        <br />
                        <div className="bio">
                            <label htmlFor="bio">Bio:</label>
                            <br />
                            <input 
                            type="text" 
                            name="bio"
                            id="bio"
                            required={true}
                            value={""}
                            />
                        </div>
                        <br />
                        <input type="submit"/>
                    </fieldset>
                </form>
            </section>
            <section>
                <div className="photo-container">

                </div>
            </section>
        </div>
    )
}

export default Survey;