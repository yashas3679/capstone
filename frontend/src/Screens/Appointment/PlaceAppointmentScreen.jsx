import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AppointmentSteps from "../../components/AppointmentSteps";
import FormContainer from "../../components/FormContainer";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useCreateAppointmentMutation } from "../../slices/appointmentsApiSlice";
import {
  clearAddress,
  clearDateNTime,
  cleardoctorInfo,
} from "../../slices/choiceSlice";

const PlaceAppointmentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const choice = useSelector((state) => state.choice);

  const [createAppointment, { isLoading, error }] =
    useCreateAppointmentMutation();

  useEffect(() => {
    if (!choice.Address.address) {
      navigate("/appointmentaddress");
    }
  }, [choice.Address.address, navigate]);

  const currentHour = new Date(choice.DateTime.selectedTime); // Patient's selected time
  const startHour = new Date(); // Today's start time for the doctor's availability
  startHour.setHours(17, 59, 0, 0); // 5:59 PM today

  const endHour = new Date(); // Today's end time for the doctor's availability
  endHour.setHours(23, 30, 0, 0); // 11:30 PM today

  // Log the times for debugging
  console.log("Current Hour:", currentHour);
  console.log("Start Hour:", startHour);
  console.log("End Hour:", endHour);

  let check = false;

  // Compare hours and minutes to determine if the appointment time is within the doctor's schedule
  if (
    (currentHour.getHours() > startHour.getHours() ||
      (currentHour.getHours() === startHour.getHours() &&
        currentHour.getMinutes() >= startHour.getMinutes())) &&
    (currentHour.getHours() < endHour.getHours() ||
      (currentHour.getHours() === endHour.getHours() &&
        currentHour.getMinutes() <= endHour.getMinutes()))
  ) {
    check = true;
  }

  const placeAppointmentHandler = async () => {
    try {
      const res = await createAppointment({
        appointmentItems: choice.doctorInfo,
        address: choice.Address,
        time: currentHour,
      }).unwrap();
      dispatch(clearDateNTime());
      dispatch(cleardoctorInfo());
      navigate(`/appointment/${res._id}`);
    } catch (err) {
      toast.error("Time Slot Is Already Booked. Plz Select Another Time");
    }
  };

  return (
    <>
      <Container>
        {choice.doctorInfo.length !== 0 && (
          <FormContainer>
            <AppointmentSteps steps={3} />
          </FormContainer>
        )}
        <Row className="mt-3">
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Patient Informations</h2>
                {choice.doctorInfo.length === 0 ? (
                  <Message>Patient Information is empty</Message>
                ) : (
                  <p>
                    <strong>Name: </strong>
                    {choice.Address.name}
                    <br />
                    <strong>Address: </strong>
                    {choice.Address.address}
                    <br />
                    <strong>Contact: </strong>
                    {choice.Address.contact}
                    <br />
                  </p>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                {check ? (
                  <Message variant="success">
                    Your Appointment is between Doctor Schedule You Can Take
                    The Appointment
                  </Message>
                ) : (
                  <Message variant="danger">
                    Your Appointment is not between Doctor Schedule
                  </Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Doctor Information</h2>
                {choice.doctorInfo.length === 0 ? (
                  <Message>Your Appointment is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {choice.doctorInfo.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/doctor/${item._id}`}>{item.name}</Link>
                          </Col>
                        </Row>
                        <br />
                        <p>
                          <strong>Specialist: </strong> {item.specialist}
                        </p>
                        <br />
                        <p>
                          <strong>Degree: </strong> {item.degree}
                        </p>
                        <br />
                        <p>
                          <strong>Chamber: </strong> {item.chamber}
                        </p>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Appointment Summary</h2>
                </ListGroup.Item>
                {choice.doctorInfo.length !== 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Name</Col>
                      <Col>{choice.Address.name}</Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>Contact Info</Col>
                      <Col>{choice.Address.contact}</Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>Address</Col>
                      <Col>{choice.Address.address}</Col>
                    </Row>
                  </ListGroupItem>
                )}
                {choice.doctorInfo.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col>Chamber</Col>
                      <Col>{item.chamber}</Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>Available</Col>
                      <Col>{item.available}</Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>Specialist</Col>
                      <Col>{item.specialist}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
                {error && (
                  <Message variant="danger">{error.data.message}</Message>
                )}
                {check && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn-block"
                      disabled={choice.doctorInfo.length === 0}
                      onClick={placeAppointmentHandler}
                    >
                      Place Appointment
                    </Button>
                    <Button
                      type="button"
                      className="btn-block"
                      onClick={() => {
                        dispatch(clearAddress());
                        dispatch(cleardoctorInfo());
                        dispatch(clearDateNTime());
                        navigate("/Doctor");
                      }}
                    >
                      Cancel Appointment
                    </Button>
                    {isLoading && <Loader />}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceAppointmentScreen;
