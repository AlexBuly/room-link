const Home = () => {
    return (
        <div className="home">
            <header>
                <h1 className="nav-logo">RoomLink</h1>
            </header>
            <main>
                 <section>
                 <h2 className="match">Match easily</h2>
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Create Account</p>
                                <p className="card-text">Fill out the survey</p>
                                <p className="card-text">Connect with matches</p>
                            </div>
                            <div className="imgs">
                                <div className="img"></div>
                                <div className="img"></div>
                                <div className="img"></div>
                            </div>
                        </div>
                        <div className="container">
                            <h3>Our goals</h3>
                            <h3>See what the hype is about!</h3>
                        </div>
                    </section>
            </main>
        </div>
        
    );
};

export default Home;