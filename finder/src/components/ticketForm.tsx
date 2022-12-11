import React = require("react");

const validInput = new RegExp("^[a-zA-Z0-9_]*$");


export default function TicketForm() {
    const [path, setPath] = React.useState("");
    const [code, setCode] = React.useState("");

    const inputPathHanler = (e: React.ChangeEvent<HTMLInputElement>) => {
        validInput.test(e.target.value) ? setPath(e.target.value): console.log("invalid");
    };

    const inputCodeHanler = (e: React.ChangeEvent<HTMLInputElement>) => {
        validInput.test(e.target.value) ? setCode(e.target.value): console.log("invalid");
    };

    return (
        <form className="form-finder">
            <input
                value={path}
                className="theia-input secodary"
                type="text"
                placeholder="Le path de fichier est ici"
                name="file path"
                id="path"
                onChange={inputPathHanler}
            />
            <input
                value={code}
                className="theia-input secodary"
                type="text"
                placeholder="Le code dans le fichier"
                name="code"
                id="code"
                onChange={inputCodeHanler}
            />
            <button
                id="displayMessageButton"
                className="theia-button secondary"
                title="Rechercher avec finder"
                onClick={() => console.log("path: " + path + " code: " + code)}
            >
                Rechercher avec finder
            </button>
        </form>
    );
}
