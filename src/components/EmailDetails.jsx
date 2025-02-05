function EmailDetails(props) {

    const email = props.email;

    console.log("entered EmailDetails");
  return (
    <div>
        <nav className="email-toolbar">            
            <button className="back" onClick={() => props.handleEmailDetails(null)}>Back</button>
          <div className="space"></div>
        </nav>
        <article className="email-content">
          <div className="title">
            <h2>{email.title}</h2>
          </div>
          <header className="email-content--header">
            <div className="email-info">
              <div className="sender-info">
                {email.sender}
                <em>&lt;no-reply@{email.sender}.com&gt;</em>
              </div>
            </div>
          </header>
          <section className="email-body">
          </section>
        </article>
    </div>
  );
}

export default EmailDetails;