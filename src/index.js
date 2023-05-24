import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/header';

const App = () => {
    // return React.createElement('h1', { className: 'Title' }, 'Hello World!');
    return (
        <div class="hey">
            <Header />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // component 타입으로 넘김