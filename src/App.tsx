import React, { CSSProperties } from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';

export const { Provider: StyleProvider, Consumer: StyleConsumer } =
    // createContext receives a default value that will be used
    // if the Consumer is not under any Provider
    React.createContext<CSSProperties>({ color: 'green', fontWeight: 'bold' });

class App extends React.Component<any> {
    // line 7 is equivalent to this:
    // constructor(props: any) {
    //     super(props);

    //     this.state = {
    //         color: 'green'
    //     };
    // }

    render() {
        return (
            <div className="App">
                <StyleProvider value={{ color: 'green', fontWeight: 'bold' }}>
                    <TodoList />
                </StyleProvider>
            </div>
        );
    }
}

export default App;
