function Email(props) {
    const email = props.email;
    const index = props.index;
    const toggleRead = props.toggleRead;
    const toggleStar = props.toggleStar;
    const handleEmailDetails = props.handleEmailDetails;
    console.log(handleEmailDetails);
    
    return (
        <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title" onClick={() => handleEmailDetails(email)}>{email.title}</div>
            </li>
    );
}

export default Email;