import { useState } from "react";

const Bai4 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "firstName") {
            setFirstName(value);
        }
        else if (name === "lastName") {
            setLastName(value);
        }
    };


    return (
        <div>
            <label>
                First Name:
                <input type="text" name="firstName" onChange={handleInputChange} />
            </label>
            <label>
                Last Name:
                <input type="text" name="lastName" onChange={handleInputChange} />
            </label>
            <h1>{`Full Name: ${firstName} ${lastName}`}</h1>
        </div>
    );
}
export default Bai4;