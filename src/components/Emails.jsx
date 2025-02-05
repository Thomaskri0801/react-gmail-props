import Email from "./Email";

function Emails(props) {
    const filteredEmails = props.filteredEmails;
    const toggleRead = props.toggleRead;
    const toggleStar = props.toggleStar;
    
    return (
        <ul>
        {filteredEmails.map((email, index) => (
        <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
        ))}
    </ul>
    );
}

export default Emails;