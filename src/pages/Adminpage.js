import "../css/Adminpage.css";
import PersnolInformation from "../components/PersnolInformation";

function Adminpage() {
    return (
        <div className="admin_content-area py-3 ">
            <div className="admin_forms_div">
                <PersnolInformation />
            </div>
        </div>
    )

}

export default Adminpage;