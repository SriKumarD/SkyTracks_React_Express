import React from "react";
import { shallow } from "enzyme";
import CreateBooking from "../components/CreateBooking";
import GetFlights from '../components/GetFlights';
import FlightDetails from '../components/flightDetails';
import GetBooking from "../components/GetBookings";

// -----------------------------------------------------------------------------------
describe("GET FLIGHT COMPONENT", () => {
  test("GFST1-GetFlight Component has a form has 4 input fields with proper name attribute", () => {
    const wrapper = shallow(<GetFlights></GetFlights>);
    var _0x6f7a = ["\x6C\x65\x6E\x67\x74\x68", "\x66\x6F\x72\x6D", "\x66\x69\x6E\x64", "\x69\x6E\x70\x75\x74", "\x6E\x61\x6D\x65", "\x70\x72\x6F\x70\x73", "\x61\x74", "\x6F\x72\x69\x67\x69\x6E", "\x64\x65\x73\x74\x69\x6E\x61\x74\x69\x6F\x6E", "\x64\x65\x70\x61\x72\x74\x75\x72\x65\x44\x61\x74\x65", "\x6E\x6F\x4F\x66\x54\x69\x63\x6B\x65\x74\x73", "\x74\x6F\x45\x71\x75\x61\x6C"]; var correctInput = false; if (wrapper[_0x6f7a[2]](_0x6f7a[1])[_0x6f7a[0]] === 1 && wrapper[_0x6f7a[2]](_0x6f7a[1])[_0x6f7a[2]](_0x6f7a[3])[_0x6f7a[0]] === 4 && wrapper[_0x6f7a[2]](_0x6f7a[1])[_0x6f7a[2]](_0x6f7a[3])[_0x6f7a[6]](0)[_0x6f7a[5]]()[_0x6f7a[4]] == _0x6f7a[7] && wrapper[_0x6f7a[2]](_0x6f7a[1])[_0x6f7a[2]](_0x6f7a[3])[_0x6f7a[6]](1)[_0x6f7a[5]]()[_0x6f7a[4]] == _0x6f7a[8] && wrapper[_0x6f7a[2]](_0x6f7a[1])[_0x6f7a[2]](_0x6f7a[3])[_0x6f7a[6]](2)[_0x6f7a[5]]()[_0x6f7a[4]] == _0x6f7a[9] && wrapper[_0x6f7a[2]](_0x6f7a[1])[_0x6f7a[2]](_0x6f7a[3])[_0x6f7a[6]](3)[_0x6f7a[5]]()[_0x6f7a[4]] == _0x6f7a[10]) { correctInput = true }; expect(correctInput)[_0x6f7a[11]](true)
  })
  test("GFST2-GetFlight Component has proper name attribute for error messages", () => {
    const wrapper = shallow(<GetFlights></GetFlights>);
    var _0xb9ad = ["\x6C\x65\x6E\x67\x74\x68", "\x5B\x6E\x61\x6D\x65\x3D\x22\x6F\x72\x69\x67\x69\x6E\x45\x72\x72\x6F\x72\x22\x5D", "\x66\x69\x6E\x64", "\x5B\x6E\x61\x6D\x65\x3D\x22\x64\x65\x73\x74\x69\x6E\x61\x74\x69\x6F\x6E\x45\x72\x72\x6F\x72\x22\x5D", "\x5B\x6E\x61\x6D\x65\x3D\x22\x64\x65\x70\x61\x72\x74\x75\x72\x65\x44\x61\x74\x65\x45\x72\x72\x6F\x72\x22\x5D", "\x5B\x6E\x61\x6D\x65\x3D\x22\x6E\x6F\x4F\x66\x54\x69\x63\x6B\x65\x74\x73\x45\x72\x72\x6F\x72\x22\x5D", "\x5B\x6E\x61\x6D\x65\x3D\x22\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65\x22\x5D", "\x74\x6F\x45\x71\x75\x61\x6C"]; var correctInput = false; if (wrapper[_0xb9ad[2]](_0xb9ad[1])[_0xb9ad[0]] === 1 && wrapper[_0xb9ad[2]](_0xb9ad[3])[_0xb9ad[0]] === 1 && wrapper[_0xb9ad[2]](_0xb9ad[4])[_0xb9ad[0]] === 1 && wrapper[_0xb9ad[2]](_0xb9ad[5])[_0xb9ad[0]] === 1 && wrapper[_0xb9ad[2]](_0xb9ad[6])[_0xb9ad[0]] === 1) { correctInput = true }; expect(correctInput)[_0xb9ad[7]](true)
  })
  test("GFST3-GetFlight Component has a View Flights with the proper name attribute", () => {
    const wrapper = shallow(<GetFlights></GetFlights>);
    var _0x8b89 = ["\x74\x6F\x48\x61\x76\x65\x4C\x65\x6E\x67\x74\x68", "\x62\x75\x74\x74\x6F\x6E\x5B\x6E\x61\x6D\x65\x3D\x22\x76\x69\x65\x77\x46\x6C\x69\x67\x68\x74\x73\x42\x75\x74\x74\x6F\x6E\x22\x5D", "\x66\x69\x6E\x64"]; expect(wrapper[_0x8b89[2]](_0x8b89[1]))[_0x8b89[0]](1)
  })
})

var _0xd592 = ["\x4D\x42\x30\x30\x31", "\x6D\x75\x6D\x62\x61\x69", "\x62\x61\x6E\x67\x61\x6C\x6F\x72\x65", "\x47\x4F\x2D\x31\x30\x31", "\x55\x41\x2D\x33\x32\x33", "\x53\x4A\x2D\x34\x33\x32", "\x47\x49\x2D\x34\x32\x37", "\x47\x49\x2D\x34\x33\x39", "\x30\x39\x3A\x30\x30\x2D\x31\x31\x3A\x33\x30", "\x30\x34\x3A\x30\x30\x2D\x30\x37\x3A\x30\x30", "\x31\x32\x3A\x30\x30\x2D\x31\x34\x3A\x33\x30", "\x31\x38\x3A\x30\x30\x2D\x32\x30\x3A\x33\x30", "\x30\x30\x3A\x33\x30\x2D\x30\x32\x3A\x30\x30", "\x4D\x75\x6D\x62\x61\x69", "\x42\x61\x6E\x67\x61\x6C\x6F\x72\x65", "\x32\x30\x32\x30\x2D\x30\x32\x2D\x30\x32"]; const availableFlights = { routeId: _0xd592[0], origin: _0xd592[1], destination: _0xd592[2], flightIds: [_0xd592[3], _0xd592[4], _0xd592[5], _0xd592[6], _0xd592[7]], flightTimings: [_0xd592[8], _0xd592[9], _0xd592[10], _0xd592[11], _0xd592[12]], prices: [2234, 2100, 3400, 4200, 2300] }; const flightData = { origin: _0xd592[13], destination: _0xd592[14], departureDate: _0xd592[15], noOfTickets: 1 }

describe("FLIGHT DETAILS COMPONENT", () => {
  test("FDST1-Flight Details has h4 tags that display the flight data entered by user", () => {
    const wrapper = shallow(<FlightDetails flightData={flightData} availableFlights={availableFlights} />);
    var _0x73db = ["\x63\x68\x69\x6C\x64\x72\x65\x6E", "\x70\x72\x6F\x70\x73", "\x61\x74", "\x68\x34", "\x66\x69\x6E\x64", "\x64\x65\x70\x61\x72\x74\x75\x72\x65\x44\x61\x74\x65", "\x6F\x72\x69\x67\x69\x6E", "\x64\x65\x73\x74\x69\x6E\x61\x74\x69\x6F\x6E", "\x6E\x6F\x4F\x66\x54\x69\x63\x6B\x65\x74\x73", "\x74\x6F\x45\x71\x75\x61\x6C"]; var correctOutput = false; if (wrapper[_0x73db[4]](_0x73db[3])[_0x73db[2]](0)[_0x73db[1]]()[_0x73db[0]] === flightData[_0x73db[5]] && wrapper[_0x73db[4]](_0x73db[3])[_0x73db[2]](1)[_0x73db[1]]()[_0x73db[0]][0] === flightData[_0x73db[6]] && wrapper[_0x73db[4]](_0x73db[3])[_0x73db[2]](1)[_0x73db[1]]()[_0x73db[0]][2] === flightData[_0x73db[7]] && Number(wrapper[_0x73db[4]](_0x73db[3])[_0x73db[2]](2)[_0x73db[1]]()[_0x73db[0]][0]) == flightData[_0x73db[8]]) { correctOutput = true }; expect(correctOutput)[_0x73db[9]](true)
  })
  test("FDST2-Flight Details has cards to display the details of available flights", () => {
    const wrapper = shallow(<FlightDetails flightData={flightData} availableFlights={availableFlights} />);
    var _0x3883=["\x63\x6F\x6E\x74\x61\x69\x6E\x73","\x61\x74","\x64\x69\x76\x5B\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65\x3D\x22\x63\x61\x72\x64\x2D\x62\x6F\x64\x79\x22\x5D","\x66\x69\x6E\x64","\x66\x6C\x69\x67\x68\x74\x54\x69\x6D\x69\x6E\x67\x73","\x70\x72\x69\x63\x65\x73","\x6E\x6F\x4F\x66\x54\x69\x63\x6B\x65\x74\x73","\x66\x6F\x72\x45\x61\x63\x68","\x66\x6C\x69\x67\x68\x74\x49\x64\x73","\x74\x6F\x45\x71\x75\x61\x6C","\x6C\x65\x6E\x67\x74\x68"];var correctOutput=0;availableFlights[_0x3883[8]][_0x3883[7]]((_0xd198x2,_0xd198x3)=>{if(wrapper[_0x3883[3]](_0x3883[2])[_0x3883[1]](_0xd198x3+ 1)[_0x3883[0]](_0xd198x2)&& wrapper[_0x3883[3]](_0x3883[2])[_0x3883[1]](_0xd198x3+ 1)[_0x3883[0]](availableFlights[_0x3883[4]][_0xd198x3])&& wrapper[_0x3883[3]](_0x3883[2])[_0x3883[1]](_0xd198x3+ 1)[_0x3883[0]](availableFlights[_0x3883[5]][_0xd198x3])&& wrapper[_0x3883[3]](_0x3883[2])[_0x3883[1]](_0xd198x3+ 1)[_0x3883[0]](availableFlights[_0x3883[5]][_0xd198x3]* flightData[_0x3883[6]])){correctOutput+= 1}});expect(availableFlights[_0x3883[8]][_0x3883[10]])[_0x3883[9]](correctOutput)
  })
  test("FDST3-Flight Details has an add passenger details buttons with each available flight card and a back button", () => {
    const wrapper = shallow(<FlightDetails flightData={flightData} availableFlights={availableFlights} />);
    var _0xe444=["\x6C\x65\x6E\x67\x74\x68","\x62\x75\x74\x74\x6F\x6E\x5B\x6E\x61\x6D\x65\x3D\x22\x67\x6F\x42\x61\x63\x6B\x22\x5D","\x66\x69\x6E\x64","\x62\x75\x74\x74\x6F\x6E\x5B\x6E\x61\x6D\x65\x3D\x22\x61\x64\x64\x50\x61\x73\x73\x65\x6E\x67\x65\x72\x22\x5D","\x66\x6C\x69\x67\x68\x74\x49\x64\x73","\x74\x6F\x45\x71\x75\x61\x6C"];var correctOutput=false;if(wrapper[_0xe444[2]](_0xe444[1])[_0xe444[0]]=== 1&& wrapper[_0xe444[2]](_0xe444[3])[_0xe444[0]]=== availableFlights[_0xe444[4]][_0xe444[0]]){correctOutput= true};expect(correctOutput)[_0xe444[5]](true)
  })
})

var _0xb295=["\x4D\x75\x6D\x62\x61\x69","\x42\x61\x6E\x67\x61\x6C\x6F\x72\x65","\x32\x30\x32\x30\x2D\x30\x32\x2D\x30\x32","\x55\x41\x2D\x33\x32\x33","\x30\x34\x3A\x30\x30\x2D\x30\x37\x3A\x30\x30","\x47\x4F\x2D\x31\x30\x31","\x30\x39\x3A\x30\x30\x2D\x31\x31\x3A\x33\x30","\x4E\x69\x63\x6B\x79","\x50\x72\x75\x73\x74\x79","\x4D\x73\x2E","\x32\x33"];const bookingDetails={origin:_0xb295[0],destination:_0xb295[1],departureDate:_0xb295[2],noOfTickets:2,flightId:_0xb295[3],timing:_0xb295[4],charges:4200};const successMessage={bookingId:1002,flightId:_0xb295[5],departureDate:_0xb295[2],origin:_0xb295[0],destination:_0xb295[1],timing:_0xb295[6],charges:2234,passengerDetails:[{firstName:_0xb295[7],lastName:_0xb295[8],title:_0xb295[9],age:_0xb295[10]}]}

describe("CREATE BOOKING COMPONENT", () => {
  test("CBST1-Create Booking has a flightDetails card to display the flight details choosen by the user", () => {
    const wrapper = shallow(<CreateBooking bookingDetails={bookingDetails} />)
    var _0x4bf3=["\x74\x6F\x45\x71\x75\x61\x6C","\x62\x6F\x6F\x6B\x69\x6E\x67\x44\x65\x74\x61\x69\x6C\x73","\x70\x72\x6F\x70\x73","\x42\x6F\x6F\x6B\x69\x6E\x67\x44\x65\x74\x61\x69\x6C\x73\x43\x61\x72\x64","\x66\x69\x6E\x64"];expect(wrapper[_0x4bf3[4]](_0x4bf3[3])[_0x4bf3[2]]()[_0x4bf3[1]]== bookingDetails)[_0x4bf3[0]](true)  })

  test("CBST2-Create Booking has a flightDetails card that has a book and a home button with proper name attribute", () => {
    const wrapper = shallow(<CreateBooking bookingDetails={bookingDetails} />)
    var _0xa643=["\x6C\x65\x6E\x67\x74\x68","\x62\x75\x74\x74\x6F\x6E\x5B\x6E\x61\x6D\x65\x3D\x22\x62\x6F\x6F\x6B\x42\x75\x74\x74\x6F\x6E\x22\x5D","\x66\x69\x6E\x64","\x64\x69\x76\x5B\x6E\x61\x6D\x65\x3D\x22\x66\x6C\x69\x67\x68\x74\x44\x65\x74\x61\x69\x6C\x73\x22\x5D","\x62\x75\x74\x74\x6F\x6E\x5B\x6E\x61\x6D\x65\x3D\x22\x68\x6F\x6D\x65\x42\x75\x74\x74\x6F\x6E\x22\x5D","\x74\x6F\x45\x71\x75\x61\x6C"];var correctOutput=false;if(wrapper[_0xa643[2]](_0xa643[3])[_0xa643[2]](_0xa643[1])[_0xa643[0]]=== 1&& wrapper[_0xa643[2]](_0xa643[3])[_0xa643[2]](_0xa643[4])[_0xa643[0]]=== 1){correctOutput= true};expect(correctOutput)[_0xa643[5]](true)
  })
  test("CBST3-Create Booking has select dropdown and input fields with proper name attributes", () => {
    const wrapper = shallow(<CreateBooking bookingDetails={bookingDetails} />)
    var _0xc253=["\x6C\x65\x6E\x67\x74\x68","\x73\x65\x6C\x65\x63\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x74\x69\x74\x6C\x65\x22\x5D","\x66\x69\x6E\x64","\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x66\x69\x72\x73\x74\x4E\x61\x6D\x65\x22\x5D","\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x6C\x61\x73\x74\x4E\x61\x6D\x65\x22\x5D","\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x61\x67\x65\x22\x5D","\x74\x6F\x45\x71\x75\x61\x6C"];var correctOutput=false;if(wrapper[_0xc253[2]](_0xc253[1])[_0xc253[0]]=== 1&& wrapper[_0xc253[2]](_0xc253[3])[_0xc253[0]]=== 1&& wrapper[_0xc253[2]](_0xc253[4])[_0xc253[0]]=== 1&& wrapper[_0xc253[2]](_0xc253[5])[_0xc253[0]]=== 1){correctOutput= true};expect(correctOutput)[_0xc253[6]](true)
  })
  test("CBST4-Create Booking component has an add buttton to add passenger details with proper name attribute", () => {
    const wrapper = shallow(<CreateBooking bookingDetails={bookingDetails} />)
    var _0x179d=["\x74\x6F\x45\x71\x75\x61\x6C","\x6C\x65\x6E\x67\x74\x68","\x62\x75\x74\x74\x6F\x6E\x5B\x6E\x61\x6D\x65\x3D\x22\x61\x64\x64\x50\x61\x73\x73\x65\x6E\x67\x65\x72\x22\x5D","\x66\x69\x6E\x64"];expect(wrapper[_0x179d[3]](_0x179d[2])[_0x179d[1]])[_0x179d[0]](1)  })
    
  test("CBST5-Create Booking component has a card to display the booking details in the success message", () => {
    const wrapper = shallow(<CreateBooking bookingDetails={bookingDetails} />)
    wrapper.setState({ successMessage: successMessage });
    var _0x6dec=["\x74\x6F\x45\x71\x75\x61\x6C","\x62\x6F\x6F\x6B\x69\x6E\x67\x44\x65\x74\x61\x69\x6C\x73","\x70\x72\x6F\x70\x73","\x42\x6F\x6F\x6B\x69\x6E\x67\x44\x65\x74\x61\x69\x6C\x73\x43\x61\x72\x64","\x66\x69\x6E\x64"];expect(wrapper[_0x6dec[4]](_0x6dec[3])[_0x6dec[2]]()[_0x6dec[1]]== successMessage)[_0x6dec[0]](true)
  })
  test("CBST6-Create Booking component has a home button in the success message card with proper name attribute", () => {
    const wrapper = shallow(<CreateBooking bookingDetails={bookingDetails} />);
    var _0xfa9a=["\x73\x65\x74\x53\x74\x61\x74\x65","\x74\x6F\x45\x71\x75\x61\x6C","\x6C\x65\x6E\x67\x74\x68","\x62\x75\x74\x74\x6F\x6E\x5B\x6E\x61\x6D\x65\x3D\x22\x68\x6F\x6D\x65\x42\x75\x74\x74\x6F\x6E\x22\x5D","\x66\x69\x6E\x64"];wrapper[_0xfa9a[0]]({successMessage:successMessage});expect(wrapper[_0xfa9a[4]](_0xfa9a[3])[_0xfa9a[2]])[_0xfa9a[1]](1)
  })
})
describe("GET BOOKING COMPONENT", () => {
  test("GBST1-Get Booking component has a form with a input field with proper name attribute", () => {
    const wrapper = shallow(<GetBooking />);
    var _0xf832=["\x74\x6F\x45\x71\x75\x61\x6C","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x62\x6F\x6F\x6B\x69\x6E\x67\x49\x64\x22\x5D","\x66\x69\x6E\x64","\x66\x6F\x72\x6D"];expect(wrapper[_0xf832[3]](_0xf832[4])[_0xf832[3]](_0xf832[2])[_0xf832[1]])[_0xf832[0]](1)
  })
  test("GBST2-Get Booking component has a View Details button with proper name attrbute", () => {
    const wrapper = shallow(<GetBooking />);
    var _0x8456=["\x74\x6F\x45\x71\x75\x61\x6C","\x6C\x65\x6E\x67\x74\x68","\x62\x75\x74\x74\x6F\x6E\x5B\x6E\x61\x6D\x65\x3D\x22\x76\x69\x65\x77\x44\x65\x74\x61\x69\x6C\x73\x22\x5D","\x66\x69\x6E\x64"];expect(wrapper[_0x8456[3]](_0x8456[2])[_0x8456[1]])[_0x8456[0]](1)
  })
  test("GBST2-Get Booking component displays the booking details in the card body", () => {
    const wrapper = shallow(<GetBooking />);
    var _0xddd9=["\x73\x65\x74\x53\x74\x61\x74\x65","\x74\x6F\x45\x71\x75\x61\x6C","\x62\x6F\x6F\x6B\x69\x6E\x67\x44\x65\x74\x61\x69\x6C\x73","\x70\x72\x6F\x70\x73","\x42\x6F\x6F\x6B\x69\x6E\x67\x44\x65\x74\x61\x69\x6C\x73\x43\x61\x72\x64","\x66\x69\x6E\x64"];wrapper[_0xddd9[0]]({bookingData:successMessage});expect(wrapper[_0xddd9[5]](_0xddd9[4])[_0xddd9[3]]()[_0xddd9[2]]== successMessage)[_0xddd9[1]](true)
  })
})