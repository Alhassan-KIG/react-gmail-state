import { useState } from "react";
import Header from "./components/Header";
import initialEmails from "./data/emails";

import "./styles/App.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);
  // Use initialEmails for state
  console.log(initialEmails);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map(function (email) {
          let className = "email";

          if (email.read) {
            className = className + " read";
          } else {
            className = className + " unread";
          }
          return (
            /* if the email is read, also add the 'read' class. If unread,
add the 'unread' class */
            <li className={className} key={email.id}>
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onClick={function () {
                    setEmails(
                      emails.map(function (e) {
                        if (email.id === e.id) {
                          email.read = !email.read;
                        }

                        return e;
                      })
                    );
                  }}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onClick={function () {
                    setEmails(
                      emails.map(function (e) {
                        if (email.id === e.id) {
                          email.starred = !email.starred;
                        }

                        return e;
                      })
                    );
                  }}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          );
        })}
      </main>
    </div>
  );
}

export default App;
