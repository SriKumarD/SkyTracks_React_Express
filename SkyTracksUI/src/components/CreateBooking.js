import React, { Component } from "react";
import axios from "axios";
import GetFlights from './GetFlights';
import BookingDetailsCard from './BookingDetailsCard';

const url = "http://localhost:1050/bookFlight/";

class CreateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingDetails:this.props.bookingDetails,
      passengerData:[],
      form: {
        firstName: "",
        lastName:"",
        title: "",
        age:""
      },
      formErrorMessage: {
        firstNameError: "",
        lastNameError:"",
        ageError:""
      },
      formValid: {
        firstName: false,
        lastName:false,
        age:false,
        buttonActive:false
      },
      errorMessage: "",
      successMessage: "",
      goBack: false
    };
  }

  book = () => {
    let bookingData = this.state.bookingDetails;
    bookingData.passengerDetails = this.state.passengerData;

    // Make axios post request to post the bookingData to the given URL
    // populate the successMessage object or the errorMessage
    this.setState({errorMessage: "",successMessage: ""})
    axios.post(url,bookingData).then((response)=>
    {
       this.setState({successMessage:response.data,errorMessage:""})
    }).catch(error =>
    {
       if(error.response)
       {
         this.setState({successMessage:"",errorMessage:error.response.data.message})
       }
       else{
         this.setState({successMessage:"",errorMessage:error.message})
       }
    })
  };

  handleChange = event => {
    // Get the names and values of the input fields
    // Update the formValue object in state
    // Call the validateField method by passing the name and value of the input field
    const target=event.target;
    const name=target.name;
    const value=target.value;
    const { form }=this.state;
    this.setState({form:{...form,[name]:value}});
    this.validateField(name,value);
  };

  validateField = (fieldName, value) => {
    // Validate the values entered in the input fields
    // Update the formErrorMessage and formValid objects in the state
    let formError=this.state.formErrorMessage;
    let formValid=this.state.formValid;
    
    switch(fieldName)
    {
      case "firstName":
        const firstNameRegex=/^[A-Z a-z]{1,15}$/
        if(value==="")
        {
          formError.firstNameError="field required";
          formValid.firstName=false;
        }else if(!value.match(firstNameRegex))
        {
            formError.firstNameError="Please enter a valid first name";
            formValid.firstName=false;
        }else{
          formError.firstNameError="";
          formValid.firstName=true;
        }
        break;
      case "lastName":
        const lastNameRegex=/^[A-Z a-z]{1,15}$/
        if(value==="")
        {
          formError.lastNameError="field required";
          formValid.lastName=false;
        }else if(!value.match(lastNameRegex))
        {
          formError.lastNameError="Please enter a valid last name";
          formValid.lastName=false;
        }else{
          formError.lastNameError="";
          formValid.lastName=true;
        }
        break;
      case "age":
        if(value==="")
        {
          formError.ageError="field required";
          formValid.age=false;
        }else if(value<1 && value>70)
        {
          formError.ageError="Sorry,age should be more than 1 year and less than 70 years";
          formValid.age=false;
        }else{
          formError.ageError="";
          formValid.age=true;
        }
        break;
      default:
        break;
    }
    formValid.buttonActive=formValid.firstName && formValid.lastName && formValid.age;
    this.setState({formErrorMessage:formError,formValid:formValid});
  };
  setPassengerData = ()=>{
    // Update the passengerData array in state
    // reset the form and the formValid object in state
    let newPassengerData = this.state.passengerData;
    newPassengerData.push(this.state.form)
    let resetForm = { firstName: "", lastName: "", title: "", age: "" }
    let resetValidField = { firstName: false, lastName: false, age: false, buttonActive: false }
    this.setState({ passengerData: newPassengerData, form: resetForm, formValid: resetValidField })
  }
  getPassengerData = ()=>{
    if(this.state.passengerData.length<Number(this.state.bookingDetails.noOfTickets)){
      return(
        <React.Fragment>
          <div className="card bg-card text-light mb-4">
          <div className="card-body">
            <h6>Passenger {this.state.passengerData.length+1}</h6>
              <div className="row">

                {/* Add name, value, placeholder attributes to the below select dropdown, inputs and button */}
                {/* Also add appropriate event handlers */}

                <div className="col-md-8">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <select name="title" id="title" className="btn btn-light" value={this.state.form.title} onChange={this.handleChange}>
                        <option value="" disabled>Title</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                    </div>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name"  className="form-control" value={this.state.form.firstName} onChange={this.handleChange}/>
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name"  className="form-control" value={this.state.form.lastName} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <input type="number" name="age" id="age" placeholder="Age" className="form-control" value={this.state.form.age} onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="col-md-2 text-center">
                  <button name="addPassenger" type="button" disabled={!this.state.formValid.buttonActive} className="btn btn-primary font-weight-bolder" onClick={this.setPassengerData}>Add</button>
                </div>
              </div>
              <div className="text-danger">

                {/* Display the formErrorMessages here */}
                <div className="text-danger" name="firstNameError">{this.state.formErrorMessage.firstNameError}</div>
                <div className="text-danger" name="lastNameError">{this.state.formErrorMessage.lastNameError}</div>
                <div className="text-danger" name="ageError">{this.state.formErrorMessage.ageError}</div>


              </div>
          </div>
        </div>
        </React.Fragment>
      )
    }
  }
  displayBookingSuccess=()=>{
    return(
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="card bg-card custom-card text-light">
                <div className="card-body">

                  {/* Add the booking ID to the below heading, from the successMessage object */}
                  <h4 className="text-success">Booking successful with booking ID:{this.state.successMessage.bookingId}</h4>

                  {/* Display the booking details here by rendering the BookingDetailsCard component and passing successMessage as props*/}
                  <BookingDetailsCard bookingDetails={this.state.successMessage}></BookingDetailsCard>

                </div>
                <div className="card-footer">

                  {/* Add the Home button here */}
                <button  type="button" className="btn btn-warning btn-block" name="homeButton" onClick={()=>this.setState({goBack:true})}>Home</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
  render() {
    if(this.state.goBack){
      // Display the GetFlights page by rendering the GetFlights component
      return <GetFlights></GetFlights>
    }
    if(this.state.successMessage===""){
      return(
        <div className="container mt-5">
            <div className="row">
              <div className="col-lg-7">
                {
                  this.state.passengerData.length>0 ? (
                    this.state.passengerData.map((passenger,index)=>{
                      return(
                        <div className="card bg-card text-light mb-4" key={index}>
                          <div className="card-body">
                            <div className="text-custom">Passenger {index+1}</div>
                            <h4>{passenger.title} {passenger.firstName} {passenger.lastName}, {passenger.age}</h4>
                          </div>
                        </div>
                      )
                    })
                  ): null
                }
                {this.getPassengerData()}
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div name="flightDetails" className="card bg-card text-light">
                  <div className="card-body">
                    
                    {/* Display the booking details here by rendering the BookingDetailsCard component and passing bookingDetails in state as props*/}
                    <BookingDetailsCard bookingDetails={this.state.bookingDetails}></BookingDetailsCard>

                  </div>
                  <div className="card-footer">

                    {/* Add the book, home buttons here and display axios error messages here */}
                    <button type="button" className="btn btn-primary btn-block" name="bookButton" disabled={!(this.state.passengerData.length===Number(this.state.bookingDetails.noOfTickets))} onClick={this.book}>Book</button>
                    <button type="button" className="btn btn-warning btn-block" name="homeButton" onClick={()=>this.setState({goBack:true})}>Home</button>
                    <span className="text-danger" name="errorMessage">{this.state.errorMessage}</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    } else{
        return this.displayBookingSuccess();
    }
  }
}

export default CreateBooking;
