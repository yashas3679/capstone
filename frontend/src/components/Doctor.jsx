import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-lg-3 col-md-3 pb-5 ">
      <div className="card cardxx">
        
        <div className="card-body">
        <Link to={`/doctor/${doctor._id}`}>
          <img
            src={doctor.image}
            alt=""
            className="img-fluid rounded-circle  mb-3"
          />
          </Link>
          <Link to={`/doctor/${doctor._id}`} className="doctorcheck">
  <h6><strong>{doctor.name}</strong></h6>
  <h6>{doctor.degree}</h6>
  <h6>{doctor.specialist}</h6>
  <h6>{doctor.chamber}</h6>
</Link>

        </div>
      </div>
    </div>
  );
};

export default Doctor;
