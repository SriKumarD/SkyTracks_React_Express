import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import FlightDetails from './flightDetails';



const url = "http://localhost:1050/getFlights/";

export default class GetFlights extends Component {
    constructor(props){
        super(props);
        this.state = {
            availableFlights:null,
            form:{
                origin: "",
                destination: "",
                departureDate: "",
                noOfTickets: 0
            },
            formErrorMessage:{
                originError: "",
                destinationError: "",
                departureDateError: "",
                noOfTicketsError: ""
            },
            formValid:{
                originfield: false,
                destinationfield: false,
                departureDatefield: false,
                noOfTicketsfield: false,
                buttonActive:true,
            },
            errorMessage:"",
            
        }
    }
    submitBooking = () => {
        // Make an axios get request to get the flights in the specified route
        // populate the availableFlights or errorMessage appropriately
        const {form}=this.state;
        this.setState({ errorMessage: "", availableFlights: null })
        axios.get(url+form.origin+"/"+form.destination).then((response)=>
        {
            this.setState({availableFlights:response.data[0]});
            
        }).catch((error)=>
        {
             if(error.response) {
                this.setState({ errorMessage: error.response.data.message, availableFlights: null });
              }
              else {
                  this.setState({ errorMessage: error.message, availableFlights: null })
              }

        })
    };
    handleSubmit = event => {
        // Prevent the default behaviour of form submission
        // Call appropriate method to make the axios get request
        event.preventDefault();
        this.submitBooking();
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
        let formerror=this.state.formErrorMessage;
        let formValid=this.state.formValid;
        switch(fieldName)
        {
            case "origin":
                const originRegex=/^[A-Z a-z]{1,15}$/
                if(value==="")
                {
                    formerror.originError="field required";
                    formValid.originfield=false;
                }else if(!value.match(originRegex)){
                    formerror.originError="Please enter a vaild origin city";
                    formValid.originfield=false;
                }
                else
                {
                    formerror.originError="";
                    formValid.originfield=true;
                }
                break;
            case "destination":
                const destinationRegex=/^[A-Z a-z]{1,15}$/
                if(value==="")
                {
                    formerror.destinationError="field required";
                    formValid.destinationfield=false;
                }else if(!value.match(destinationRegex))
                {
                    formerror.destinationError="Please enter a vaild destination city";
                    formValid.destinationfield=false;
                }
                else
                {
                    formerror.destinationError="";
                    formValid.destinationfield=true;
                }
                break;
            case "departureDate" :
                if(value==="")
                {
                    formerror.departureDateError="field required";
                    formValid.destinationfield=false;
                }else if(new Date(value).getTime() < new Date().getTime())
                {
                    formerror.departureDateError="Departure date cannot be before today";
                    formValid.destinationfield=false;
                }
                else
                {
                    formerror.departureDateError="";
                    formValid.destinationfield=true;
                }
                break;
            case "noOfTickets":
                if(value==="")
                {
                    formerror.noOfTicketsError="field required";
                    formValid.noOfTicketsfield=false
                }else if(value<1)
                {
                    formerror.noOfTicketsError="Number of tickets cannot be less than 1";
                    formValid.noOfTicketsfield=false;
                }else if(value>5)
                {
                    formerror.noOfTicketsError="You can book 5 tickets at a time";
                    formValid.noOfTicketsfield=false;
                }else
                {
                    formerror.noOfTicketsError="";
                    formValid.noOfTicketsfield=true;
                }
                break;
            default:
                break;
        }
        formValid.buttonActive= formValid.originfield && formValid.destinationfield && 
                                formValid.noOfTicketsfield && formValid.departureDatefield;
        this.setState({formErrorMessage:formerror,formValid:formValid})
    };
    render(){
        if(this.state.availableFlights!=null){
            // Pass appropriate props to the FlightDetails component below
            return <FlightDetails flightData={this.state.form} availableFlights={this.state.availableFlights}></FlightDetails>
        } else{
            return(
                <React.Fragment>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-4 offset-lg-1">
                                <div className="card bg-card text-light ">
                                    <div className="card-body">
                                        {/* Create the form here */}
                                        <form className="form" onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                 <label for="origin">Origin</label>
                                                 <input id="origin" className="form-control" type="text" name="origin" placeholder="Origin" value={this.state.form.origin} onChange={this.handleChange}/>
                                                <span className="text-danger" name="originError">{this.state.formErrorMessage.originError}</span>
                                            </div>
                                            <div className="form-group">
                                                 <label for="destination">Destination</label>
                                                 <input id="destination" className="form-control" type="text" name="destination" placeholder="Destination" value={this.state.form.destination} onChange={this.handleChange}/>
                                                 <span className="text-danger" name="destinationError">{this.state.formErrorMessage.destinationError}</span>
                                            </div>
                                            <div className="form-group">
                                                 <label for="departureDate">Departure Date</label>
                                                 <input id="departureDate" className="form-control" type="date" name="departureDate" value={this.state.form.departureDate} onChange={this.handleChange}/>
                                                 <span className="text-danger" name="departureDateError">{this.state.formErrorMessage.departureDateError}</span>
                                            </div>
                                            <div className="form-group">
                                                 <label for="noOfTickets">No Of Tickets</label>
                                                 <input id="noOfTickets" className="form-control" type="number" name="noOfTickets" placeholder="No Of Tickets" value={this.state.form.noOfTickets} onChange={this.handleChange}/>
                                                 <span className="text-danger" name="noOfTicketsError">{this.state.formErrorMessage.noOfTicketsError}</span>
                                            </div>
                                            <button name="viewFlightsButton" type="submit" className="btn btn-primary btn-block" disabled={this.state.formValid.buttonActive}>View Flights</button>
                                            <span className="text-danger" name="errorMessage">{this.state.errorMessage}</span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

}