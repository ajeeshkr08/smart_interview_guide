import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI();

const MyStreamingComponent = () => {
    const [response, setResponse] = useState('');
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const stream = await openai.chat.completions.create({
                model: "gpt-4",
                messages: [{ role: "user", content: inputText }],
                stream: true,
            });

            for await (const chunk of stream) {
                setResponse(chunk.choices[0]?.delta?.content || "");
            }
        };

        if (inputText) {
            fetchData();
        }

        return () => {
            // Cleanup function if needed
        };
    }, [inputText]); // Run effect whenever inputText changes

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleButtonClick = () => {
        // Trigger fetchData when button is clicked
        if (inputText) {
            fetchData();
        }
    };

    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Fetch Data</button>
            <p>{response}</p>
        </div>
    );
};

export default MyStreamingComponent;