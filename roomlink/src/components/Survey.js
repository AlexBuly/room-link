const Survey = () => {
    return (
        <div className="survey">
            <form>
                <div className="first">
                    <label htmlFor="first-name">Fist name:</label>
                    <input 
                    type="text"
                    id="first-name"
                    name="first-name" 
                    required={true}
                    />
                </div>
                <br />
                <div className="last">
                    <label htmlFor="last-name">Last name:</label>
                    <input 
                    type="text" 
                    id="last-name"
                    name="last-name"
                    required="true"
                    />
                </div>
            </form>
        </div>
    )
}

export default Survey;