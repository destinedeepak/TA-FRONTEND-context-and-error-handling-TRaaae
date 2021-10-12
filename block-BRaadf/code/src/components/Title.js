import { UserConsumer } from './UserContext';

function Title({ text, isDarkMode }) {
  return (
    //passing callback to get UserConsumer
    <UserConsumer>
      {(isDarkMode) => {
        return (
          <h2
            className={`heading ${
              isDarkMode ? 'sub-heading-dark' : 'sub-heading-light'
            }`}
          >
            {text}
          </h2>
        );
      }}
    </UserConsumer>
  );
}

export default Title;
