import Email from "./Email";

function Emails(props) {
    const filteredEmails = props.filteredEmails;
    const toggleRead = props.toggleRead;
    const toggleStar = props.toggleStar;
    const handleEmailDetails = props.handleEmailDetails;
    
    return (
        <ul>
        {filteredEmails.map((email, index) => (
            <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} handleEmailDetails={handleEmailDetails}/>
        ))}

        
    </ul>
    );
}

export default Emails;