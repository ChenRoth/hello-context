import * as React from 'react';
import { StyleConsumer } from '../../App';

export class ColorSettings extends React.Component<any> {
    public render() {
        const { text } = this.props;
        return (
            <StyleConsumer>
                {({ style, setStyle }) =>
                    <div>
                        <p>current color is {style.color}</p>
                        <input type="color" value={style.color} onChange={e => setStyle({ ...style, color: e.target.value })} />
                    </div>
                }
            </StyleConsumer>
        )
    }
}

