import React from "@theia/core/shared/react"

export default function ToolPitWithStyle () {

    const [message, setMessage] = React.useState("This is a message");
    const [show, setShow] = React.useState(false);


    const toolpitStyle = {
        boolpit_bottom: {
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, 0)",
            padding: "0.5rem",
            backgroundColor: "black",
            color: "white",
            borderRadius: "0.25rem",
            fontSize: "0.75rem",
            zIndex: 10,
        }
    }


    return (
        <div>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />


                </div>
        </div>
    );
}
