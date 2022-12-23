import React = require("react");

const validInput = new RegExp("^[a-z0-9 _]*$");

export default function TicketForm(props: any) {
     const [path, setPath] = React.useState("");
     const [code, setCode] = React.useState("");
     const [error, setError] = React.useState("");
     const [nameError, setNameError] = React.useState("");

     const searchButton = document.getElementById("buttonDisableOrNot");

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
          },

          tooltip_arrow: {
               position: "absolute",
               top: "0",
               left: "50%",
               transform: "translate(-50%, 0)",
               width: "0",
               height: "0",
               borderLeft: "0.5rem solid transparent",
          },

          tooltip_label: {
               padding: "0.5rem",
               backgroundColor: "black",
               color: "white",
               borderRadius: "0.25rem",
               fontSize: "0.75rem",
          }
     } as any;


     const toolpit = (message : string) => {
          return (
               <div id="tooltip" style={{...toolpitStyle.boolpit_bottom}}>
                    <div className="tooltip-arrow" />
                    <div className="tooltip-label">{message}</div>
               </div>
          );
     };






     React.useEffect(() => {
          disableOrNotButton();
     }, [props.swProjectName]);

     const disableOrNotButton = () => {
          if (props.swProjectName) {
               if (searchButton) {
                    searchButton.style.backgroundColor = "rgb(128, 128, 128)";
               }
          } else {
               if (searchButton) {
                    searchButton.removeAttribute("disabled");
               }
          }
     };

     /**
      * Toolpit
      */

     // get by className
     const tooltip = document.getElementsByClassName("tooltip");

     React.useEffect(() => {
          if (error) {
               const timerMessage = setTimeout(() => {
                    setError("");
               }, 3000);
               return () => clearTimeout(timerMessage);
          }
     }, [error]);

     // displayMessageButton : id anle button
     React.useEffect(() => {}, [code]);



     return (
          <form className="form-finder">
               <input
                    value={path}
                    className="theia-input secodary"
                    type="text"
                    placeholder="Nom du projet"
                    name="file path"
                    id="path"
                    onChange={(e) => {
                         setPath(e.target.value);
                    }}
               />
               <span
                    style={{
                         color: "red",
                         margin: "1vh auto",
                         flexDirection: "column",
                    }}
                    className="text-danger"
               >
                    {error}
               </span>
               <input
                    value={code}
                    className="theia-input secodary"
                    type="text"
                    placeholder="Emplacement du projet"
                    name="code"
                    id="project_Name"
               />
               <span
                    style={{
                         color: "red",
                         margin: "1vh auto",
                         flexDirection: "column",
                    }}
                    className="text-danger"
               >
                    {nameError}
               </span>
               <button
                    style={{
                         backgroundColor: "rgb(0, 0, 0)",
                    }}
                    type="submit"
                    id="displayMessageButton"
                    className="theia-button secondary"
                    title="Rechercher avec finder"
               >
                    Créer le projet
               </button>
          </form>
     );
}
