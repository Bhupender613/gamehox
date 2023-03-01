const getStringFromArray = (arr, key) => {
  return arr?.map?.((i) => i[key]) || [];
};

export const emailService = (key, obj) => {
  const adminEmail = "adminmail@yopmail.com";
  const from = "kmitdev1@gmail.com";

  switch (key) {
    case "addUsers":
      return {
        to: obj.email,
        from,
        subject: "MRS Registration",
        html: `Hi ${obj.companyName} </br> </br> Welcome to MRS </br> Your registration is successfully Completed.</br>
             Here are your login details : <br>
             Email :  ${obj.email} <br>
             Password : ${obj.password}`,
      };

    case "addUsersAdmin":
      return {
        to: adminEmail,
        from,
        subject: "MRS Registration",
        html: `Hi Admin</br> </br> New registration request is arrived. </br> Please approved/disapproved from admin panel.</br>
            Here are the details : <br>
            Name : ${obj.companyName}<br>
            Email :  ${obj.email} <br>
            PhoneNumber : ${obj.phoneNumber}`,
      };

    case "clientImportToAdmin":
      return {
        to: adminEmail,
        from,
        subject: "Client Import successfully",
        html: `Hi Admin</br> </br> All ${obj.length} clients are successfully imported in the MRS admin dashboard.`,
      };

    case "userDeactivate":
      return {
        to: obj.email,
        from,
        subject: "Deactivate By Admin",
        html: `Hi <br> Your account Deactivated by Admin. Now you cannot login in the MRS system. Please contact to administrator.`,
      };

    case "userActivate":
      return {
        to: obj.email,
        from,
        subject: "Active By Admin",
        html: `Hi <br> You are successfully Active by Admin. Now you can login in the MRS system.`,
      };
    case "outletDeactivate":
      return {
        to: obj.email,
        from,
        subject: "Deactivate By Service Provider",
        html: `Hi <br> Your account Deactivated by Service Provide. Now you cannot login in the outlet Dashboard. Please contact to Service Provider.`,
      };

    case "outletActivate":
      return {
        to: obj.email,
        from,
        subject: "Active By Service Provider",
        html: `Hi <br> You are successfully Active by Service Provider. Now you can login in the outlet Dashboard.`,
      };

    case "forgotPassword":
      return {
        to: obj.email,
        from,
        subject: "Forgot password",
        html: `Your password is reset successfully. </br> <br> Your new password is ${obj.paswordGenerate}`,
      };

    case "mailToCustomer":
      return {
        to: obj.email,
        from,
        subject: "New Appointment",
        html: `Hi ${obj.name} </br> </br> Your appointment is successfully booked </br></br>
             Here are your appointment details : <br>
             Name :  ${obj.name} <br>
             Email :  ${obj.email} <br>
             PhoneNumber :  ${obj.phoneNumber} <br>
             BookingDate :  ${obj.bookingDate} <br>
             BookingNumber :  ${obj.bookingNumber} <br>
             Service : ${obj.service.name} <br>
             TimeSlot : ${obj.timeSlot.start} -  ${obj.timeSlot.end}<br>`,
      };

    case "mailToOutlet":
      return {
        to: obj.outlet.email,
        from,
        subject: "New Appointment",
        html: `Hi ${obj.outlet.name} </br> </br> A new Appointment has been booked </br></br>
             Here are  appointment details : <br>
             Name :  ${obj.name} <br>
             Email :  ${obj.email} <br>
             PhoneNumber :  ${obj.phoneNumber} <br>
             BookingDate :  ${obj.bookingDate} <br>
             BookingNumber :  ${obj.bookingNumber} <br>
             Service : ${obj.service.name} <br>
             TimeSlot : ${obj.timeSlot.start} -  ${obj.timeSlot.end}<br>`,
      };
    case "addOutletEmail":
      return {
        to: obj.email,
        from,
        subject: "New Outlet",
        html: `Hi ${obj.name} </br> </br> You are added as outlet owner.  </br></br>
             Here are outlet details : <br>
             Name :  ${obj.name} <br>
             Email :  ${obj.email} <br>
             Password :  ${obj.password} <br>`,
      };

    case "importOutletInfoToOwner":
      return {
        to: obj?.userData?.data?.email,
        from,
        subject: "New Outlet Info",
        html: `Hi ${
          obj?.userData?.data?.companyName
        }  </br> </br> Total record imported : ${obj.insert}  </br></br>
             Total record not imported : ${obj.notInsert.length} </br></br>
             ${
               obj.notInsert.length
                 ? `Below are the details of not imported records  </br></br>
             <table>
             <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Password</th>
             <th>phoneNumber</th>
             <th>Address</th>
             <th>Description</th>
             </tr>
            <tr>
            <td>${getStringFromArray(obj.notInsert, "name")?.join(
              `<br />`
            )}</td>
            <td>${getStringFromArray(obj.notInsert, "email")?.join(
              `<br />`
            )}</td>
            <td>${getStringFromArray(obj.notInsert, "password")?.join(
              `<br />`
            )}</td>
            <td>${getStringFromArray(obj.notInsert, "phoneNumber")?.join(
              `<br />`
            )}</td>
            <td>${getStringFromArray(obj.notInsert, "address")?.join(
              `<br />`
            )}</td>
            <td>${getStringFromArray(obj.notInsert, "description")?.join(
              `<br />`
            )}</td>
            </tr>
          </table>`
                 : ""
             }
            `,
      };

    case "importClientInfoToAdmin":
      return {
        to: adminEmail,
        from,
        subject: "New Client Info",
        html: `Hi Admin  </br> </br> Total record imported : ${
          obj.insert
        }  </br></br>
                 Total record not imported : ${obj.notInsert.length} </br></br>
                 ${
                   obj.notInsert.length
                     ? `Below are the details of not imported records  </br></br>
                 <table>
                 <tr>
                 <th>Company Name</th>
                 <th>Email</th>
                 <th>Password</th>
                 <th>phoneNumber</th>
                 <th>Address</th>
                 <th>UEN</th>
                 <th>country</th>
                 </tr>
                <tr>
                <td>${getStringFromArray(obj.notInsert, "companyName")?.join(
                  `<br />`
                )}</td>
                <td>${getStringFromArray(obj.notInsert, "email")?.join(
                  `<br />`
                )}</td>
                <td>${getStringFromArray(obj.notInsert, "password")?.join(
                  `<br />`
                )}</td>
                <td>${getStringFromArray(obj.notInsert, "phoneNumber")?.join(
                  `<br />`
                )}</td>
                <td>${getStringFromArray(obj.notInsert, "address")?.join(
                  `<br />`
                )}</td>
                <td>${getStringFromArray(obj.notInsert, "UEN")?.join(
                  `<br />`
                )}</td>
                <td>${getStringFromArray(obj.notInsert, "country")?.join(
                  `<br />`
                )}</td>
                </tr>
              </table>`
                     : ""
                 }
                `,
      };
    case "cancelMailToCustomer":
      return {
        to: obj.email,
        from,
        subject: "Cancel Appointment",
        html: `Hi ${obj.name} < /br> </br > Your Appointment is canceled with booking number  ${obj.bookingNumber}.</br></br > `,
      };

    case "cancelMailToOutlet":
      return {
        to: obj.outlet.email,
        from,
        subject: "Cancel Appointment",
        html: `Hi ${obj.outlet.name} </br> </br > An Appointment is canceled with booking number ${obj.bookingNumber}.</br></br > `,
      };
    case "appointmentCompleteToCustomer":
      return {
        to: obj.email,
        from,
        subject: "Appointment Complete",
        html: `Hi ${obj.name} </br> </br> Your appointment is successfully Completed </br></br>
            Here are your appointment details : <br>
            Name :  ${obj.name} <br>
            Email :  ${obj.email} <br>
            PhoneNumber :  ${obj.phoneNumber} <br>
            BookingDate :  ${obj.bookingDate} <br>
            BookingNumber :  ${obj.bookingNumber} <br>
            Service : ${obj.service.name} <br>
            Status : COMPLETE <br>
            TimeSlot : ${obj.timeSlot.start} -  ${obj.timeSlot.end}<br>`,
      };

    case "appointmentCompleteToOutlet":
      return {
        to: obj.outlet.email,
        from,
        subject: "Appointment Complete",
        html: `Hi ${obj.outlet.name} </br> </br> A Appointment has been completed </br></br>
                   Here are  appointment details : <br>
                   Name :  ${obj.name} <br>
                   Email :  ${obj.email} <br>
                   PhoneNumber :  ${obj.phoneNumber} <br>
                   BookingDate :  ${obj.bookingDate} <br>
                   BookingNumber :  ${obj.bookingNumber} <br>
                   Service : ${obj.service.name} <br>
                   Status :COMPLETE <br>
                   TimeSlot : ${obj.timeSlot.start} -  ${obj.timeSlot.end}<br>`,
      };

    case "appointmentCancelToCustomer":
      return {
        to: obj.email,
        from,
        subject: "Cancel Appointment",
        html: `Hi ${obj.name} </br> </br > An Appointment is canceled with booking number ${obj.bookingNumber}.</br></br > `,
      };

    case "appointmentCancelToOutlet":
      return {
        to: obj.outlet.email,
        from,
        subject: "Cancel Appointment",
        html: `Hi ${obj.outlet.name} </br> </br > An Appointment is canceled with booking number ${obj.bookingNumber}.</br></br > `,
      };

    default:
    // return this.mailerService.sendMail({
    //   to: obj.email,
    //   from: "kmitdev1@gmail.com",
    //   subject: "MRS Registration",
    //   html: `Hi ${ obj.name } </br> </br > Welcome to MRS < /br> Your registration is successfully Completed.</br >
    //   Here are your login details : <br>
    //   Email :  ${obj.email} <br>
    //   Password : ${obj.password}`,
    // })
  }
};

// export default {
//   sendEmail
// }
