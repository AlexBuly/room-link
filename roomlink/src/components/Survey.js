import { useState } from "react";

const Survey = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        fisrt_name: '',
        last_name: '',
        birthdate: '',
        birth_month: '',
        birth_year: '',
        gender: '',
        major: '',
        bio: '', 
        matches: []
    })

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div className="survey">
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <h2>Create Account</h2>
                        <div className="first">
                            <label htmlFor="first_name">Fist name:</label>
                            <input 
                            type="text"
                            id="first_name"
                            name="first_name" 
                            required={true}
                            value={formData.fisrt_name}
                            onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div className="last">
                            <label htmlFor="last-name">Last name:</label>
                            <input 
                            type="text" 
                            id="last_name"
                            name="last_name"
                            required={true}
                            value={formData.last_name}
                            onChange={handleChange}
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
                            value={formData.birthdate}
                            onChange={handleChange}
                            />
                            <label htmlFor="birth_month">Month</label>
                            <input 
                            type="number" 
                            id="birth_month"
                            name="birth_month"
                            required={true}
                            value={formData.birth_month}
                            onChange={handleChange}
                            />
                            <label htmlFor="birth_year">Year</label>
                            <input 
                            type="number" 
                            id="birth_year"
                            name="birth_year"
                            required={true}
                            value={formData.birth_year}
                            onChange={handleChange}
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
                            value={formData.gender}
                            onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div className="class_rank">
                            <label htmlFor="class_rank">Year:</label>
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
                            value={formData.major}
                            onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div className="cleanliness">
                            <label htmlFor="cleanliness">How often do you shower?:</label>
                            <select name="cleanliness" id="cleanliness" required={true} onChange={handleChange}>
                                <option value={"2-4"}>2-4 times a week</option>
                                <option value={"3-5"}>3-5 times a week</option>
                                <option value={"everyday"}>Everyday</option>
                            </select>
                        </div>
                        <br />
                        <div className="major_interest">
                            Does it matter that your roommate has the same/similar major as you
                            <br />
                            <input type="radio" name="major_intest" id="yes" value={"yes"} required={true} onChange={handleChange}/>
                            <label htmlFor="yes">Yes</label>
                            <br />
                            <input type="radio" name="major_intest" id="no" value={"no"} onChange={handleChange}/>
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
                            value={formData.bio}
                            onChange={handleChange}
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