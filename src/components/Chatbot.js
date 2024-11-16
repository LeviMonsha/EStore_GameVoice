import React, { useState, useEffect, useRef } from 'react';

const ChatBot = ({ onUserMessage, onClose }) => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const chatRef = useRef(null);

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            const botResponse = getResponse(input);
            setMessages(prev => [...prev, userMessage, { text: botResponse, sender: 'bot' }]);
            onUserMessage(input);
            setInput('');
        }
    };

    const getResponse = (message) => {
        const lowerCaseMessage = message.toLowerCase();
        if (lowerCaseMessage.includes("рекомендация") || lowerCaseMessage.includes("игры")) {
            return "Я могу порекомендовать поиграть в Super Mario Bros, Pac-Man или The Legend of Zelda.";
        } else if (lowerCaseMessage.includes("цена")) {
            return "Цены на игры варьируются.";
        } else if (lowerCaseMessage.includes("доступность")) {
            return "Проверьте наличие игры на странице продукта.";
        } else if (lowerCaseMessage.includes("связь")) {
            return "Вы можете связаться с нами в VK, Telegram";
        } else {
            return "Извините, я не понимаю.";
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const clearChat = () => {
        setMessages([]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatRef.current && !chatRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={chatRef} className="fixed bottom-20 right-4 w-80 p-4 bg-white shadow-lg rounded-lg z-10">
            <h3 className="text-lg font-bold">Помощница</h3>
            <div className="overflow-y-auto h-60 border border-gray-300 p-2 mb-2">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <span className={`inline-block p-2 rounded ${msg.sender === 'user' 
                            ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="border p-2 rounded w-full"
                placeholder="Задайте вопрос..."
            />
            <div className="flex justify-between mt-2">
                <button onClick={handleSend} 
                className="bg-blue-500 text-white p-2 rounded w-full mr-1 hover:bg-blue-600 transition duration-300">
                    Отправить
                </button>
                <button onClick={clearChat} 
                className="bg-red-500 text-white p-2 rounded w-full ml-1 hover:bg-red-600 transition duration-300">
                    Очистить
                </button>
            </div>
        </div>
    );
};

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button 
                onClick={() => setIsOpen(prev => !prev)} 
                className="fixed bottom-0 right-0 text-white rounded-full p-3 transition duration-300 z-20">
                <img 
                    src="/img/thumb-fotor.png"
                    alt="Postwitch bot"
                    className="w-36 h-20 animate-bounce"/>
            </button>

            {isOpen && <ChatBot onUserMessage={(message) => console.log(message)} onClose={() => setIsOpen(false)} />}
        </div>
    );
};

export default ChatWidget;
