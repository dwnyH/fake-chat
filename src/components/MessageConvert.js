import React, { Component } from 'react';

class MessageConvert extends Component {
    constructor(props) {
        super(props);
        this.printEmoji = this.printEmoji.bind(this);
        this.printBold = this.printBold.bind(this);
    }

    printEmoji(text) {
        text = text.replace(':)', '😀');
        text = text.replace(':facepalm:', '🤦');
        text = text.replace(':scream_cat:', '🙀');
        text = text.replace(':ghost:', '👻');
        text = text.replace(':sob:', '😭');
        text = text.replace(':thumbs_up:', '👍');

        return text;
    }

    printBold(text) {
        let textWithBold;

        const firstIndex = text.indexOf('*');
        const lastIndex = text.indexOf('*', firstIndex + 1);

        if (lastIndex) {
            textWithBold = text.substring(0, firstIndex)+ text.substring(firstIndex + 1, lastIndex).bold() + text.substring(lastIndex+1);
            return textWithBold;
        }

        return text;
    }

    printIntalic(text) {
        let textWithItalic;

        const firstIndex = text.indexOf('_');
        const lastIndex = text.indexOf('_', firstIndex + 1);

        if (lastIndex) {
            textWithItalic = text.substring(0, firstIndex)+ text.substring(firstIndex + 1, lastIndex).italics() + text.substring(lastIndex+1);
            return textWithItalic;
        }
        return text;
    }

    render() {
        let convertedMessage = this.printEmoji(this.props.message);

        if (convertedMessage.indexOf('*') >= 0) {
            convertedMessage = this.printBold(convertedMessage);
        }

        if (convertedMessage.indexOf('_') >= 0) {
            convertedMessage = this.printIntalic(convertedMessage);
        }

        return <div dangerouslySetInnerHTML={{ __html: convertedMessage }} />;
    }
}

export default MessageConvert;
