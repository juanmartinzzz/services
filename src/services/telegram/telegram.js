// Using this service adds a project dependency with got: https://www.npmjs.com/package/got
// Install with `npm i got`
const got = require('got');

const getBot = ({botUrl}) => {};

const sendMessage = async ({text, botUrl, chatOrUserId, parseMode = "Markdown"}) => {
  const method = 'sendMessage';

  const response = await got(`${botUrl}/${method}`, {
    searchParams: {
      chat_id: chatOrUserId,
      text,
      parse_mode: parseMode,
    }
  });

  return;
}

// exports.telegram = { sendMessage };

module.exports = {
  bot: {sendMessage},
};

// export const telegram = {
//   sendMessage,
// };