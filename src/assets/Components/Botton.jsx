import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
let navigate = useNavigate()
 function ButtonDefault() {
  return <Button onClick={()=>navigate('/admin')} className="bg-slate-700 px-5 py-2">Admin</Button>;
}
export default ButtonDefault