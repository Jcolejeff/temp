import MailchimpSubscribe from "react-mailchimp-subscribe";
import Join from "../JoinForm";

const MailchimpForm = () => {
    const url = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_UVAL}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    
    return (

        <div className="form-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <Join
                        status={status}
                        message={message}
                        onValidated={data => subscribe(data)}
                    />
                )}
            />
        </div>

    )
}

export default MailchimpForm;