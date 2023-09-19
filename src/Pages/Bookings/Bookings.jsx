import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings`
    return (
        <div>
            
        </div>
    );
};

export default Bookings;