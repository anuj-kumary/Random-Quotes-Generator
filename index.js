        let realData = "";
        let quotesData = "";

        const tweetNow = () =>{
            let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
            window.open(tweetPost);
        }
        const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const newQuote = document.getElementById("newQuote");
        const tweet = document.getElementById("tweet");
        const getNewQuotes = () =>{
            let rnum = Math.floor(Math.random()*100) ;
            quotesData = realData[rnum];
            // console.log(realData[rnum].author);
            quotes.innerText = `${quotesData.text}`;
            quotesData.author == null
            ? (author.innerText = "unKnown")
            : (author.innerText = `${quotesData.author}`);
        };

        const getQuotes = async ()=>{
            const api = "https://type.fit/api/quotes";
            try{
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
                // console.log(realData);

            } catch(error) {}

        };
        tweet.addEventListener("click", tweetNow);
        newQuote.addEventListener("click",getNewQuotes);
        getQuotes();
 
    
