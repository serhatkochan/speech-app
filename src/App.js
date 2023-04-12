import {useState} from "react";

function App() {
    const [message, setMessage] = useState('');
    const handleSpeech = (lang) => {
        let utterance = new SpeechSynthesisUtterance(message);

        utterance.rate = 0.9; // default 1
        utterance.lang = lang; // default tarayıcı dili
        window.speechSynthesis.speak(utterance);
    }

    const onMessageChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <>
            <input placeholder="Mesaj Gir" type="text" value={message} onChange={onMessageChange}/>
            <button onClick={() => handleSpeech('tr')}>Türkçe Okut</button>
            <button onClick={() => handleSpeech('en')}>ingilizce Okut</button>
            <button onClick={() => handleSpeech('ja')}>Japonca Okut</button>
        </>
    );
}

export default App;
