function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] =React.useState([]);
    const [color, setColor] = React.useState("#111");

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex]);
        }
        fetchData();
    }, [])

    const getNewQuote = () => {

        const colors = [
            "#1B2735", // Deep Space
            "#08E8DE", // Electric Cyan
            "#EE2737", // Laser Red
            "#D4AF37", // Cyber Gold
            "#7700FF", // Hyperspace Purple
            "#00FF00", // Neon Green
            "#FF00FF", // Plasma Pink
            "#B2FFFF", // Celestial Aqua
            "#FF0080", // Quantum Magenta
            "#C8C8C8"  // Silver Titanium
          ];
        let randcolorIndex = Math.floor(Math.random() * colors.length);
        let randIndex = Math.floor(Math.random() * quotes.length);
            setRandomQuote(quotes[randIndex])
            setColor(colors[randcolorIndex])
    }

    return(
        <div className="container" id="quote-box" style={{backgroundColor: color, minHeight: "100vh"}}>
            <div className="container pt-5">
                <div className="jumbotron">
                    <div className="card">
                        <div className="card-header">Inspiration</div>
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                    <h5 className="card-title" id="author">- {randomQuote.author || "No author"}</h5>
                                    <p className="card-text" id="text">&quot;{randomQuote.text}</p>
                                </>
                            ) : (
                                <h2>Loading</h2>
                            )}
                            <div className="row">
                                <button onClick={getNewQuote} className="btn btn-primary ml-3">New Quote</button>
                                <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(
                                    '"' + randomQuote.text + '" ' + randomQuote.author 
                                            )
                                        }
                                    target="_blank" className="btn btn-warning" id="tweet-quote">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/jigar_financial_advisory/"
                                    target="_blank" className="btn btn-danger"> {/* this part is incomplete twitter is finished*/}
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById('app'))