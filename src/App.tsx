import React, { CSSProperties } from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';
import { ColorSettings } from './components/ColorSettings/ColorSettings';

export const { Provider: StyleProvider, Consumer: StyleConsumer } =
    // createContext receives a default value that will be used
    // if the Consumer is not under any Provider
    React.createContext<{ style: CSSProperties, setStyle(style: CSSProperties): void }>({} as any);

interface IAppState {
    style: CSSProperties;
}

class App extends React.Component<any, IAppState> {
    state: IAppState = {
        style: {
            color: '#ffee44',
            fontWeight: 'bold',
            fontStyle: 'italic',
        }
    }

    render() {
        const { style } = this.state;
        return (
            <div className="App">
                <StyleProvider value={{ style, setStyle: this.setStyle }}>
                    <ColorSettings />
                    <TodoList />
                </StyleProvider>
            </div>
        );
    }

    setStyle = (style: CSSProperties) => this.setState({ style })
}

export default App;
