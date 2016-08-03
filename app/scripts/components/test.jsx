var SignInComponent = require('./login.jsx').SignInComponent;
var SignUpComponent = require('./login.jsx').SignUpComponent;

<ul className="btn-list profile-btns">
  <li><button className="jets-button" type="button"><a href="#">Home</a></button></li>
  <li><button className="jets-button" type="button"><a href="#athleteEntry">Athlete Entry</a></button></li>
  <li><button className="jets-button" type="button"><a href="#athleteProfile">Athlete Profiles</a></button></li>
  <li><button className="jets-button" type="button"><a href="#results">Event Results Entry</a></button></li>
  <li><button className="jets-button" onClick={this.handleSignout} type="button"><a href="#">Log Out</a></button></li>
</ul>


// var filterBy = this.props.athleteList.where({
//   'ageGroup': this.state.selectedAge,
//   'gender': this.state.selectedGender
// }).map(function(model){
//   return (
//      <a key={model.get('objectId')} href={'#athletes/' + model.get('objectId')}>
//        <li>
//       {model.get('athleteName')}
//       </li>
//   </a>
//   );
// });
