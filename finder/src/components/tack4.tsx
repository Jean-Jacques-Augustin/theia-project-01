import React = require("@theia/core/shared/react");

export default function Tack4() {
    const regex = new RegExp("^[a-z0-9 _]*$");
    const [erreur, setErreur] = React.useState("");
    const [name, setName] = React.useState("");

    // const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(event.target.value);
    //     if (name.match(regex)) {
    //         setErreur("");
    //     } else {
    //         setErreur("Le nom ne doit pas contenir de caractères spéciaux");
    //     }
    // };


    // Test the value of the input with the regex and trim,
    const changeNameTrim = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value.trim());
        if (name.match(regex)) {
            setErreur("");
        } else {
            setErreur("Le nom ne doit pas contenir de caractères spéciaux");
        }
    }


    return (
        <div>

            <div className="input-group">
                <input
                    value={name}
                    type="text"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={changeNameTrim}
                />
                <div>{erreur}</div>
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    // disabled if erreur is not empty
                    disabled={erreur !== ""} // disable button if erreur is not empty
                >
                    Valider
                </button>
            </div>
        </div>
    );
}
