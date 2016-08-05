<label htmlFor="event">Event</label>
<select value={this.state.event} onChange={this.addEvent} className="form-control" id="event">
  <option>-- Select --</option>
  <option>100</option>
  <option>200</option>
  <option>400</option>
  <option>800</option>
  <option>1500</option>
</select>

<label htmlFor="athlete">Athlete Name</label>
<select value={this.state.athlete} onChange={this.props.chooseAthlete}
  className="form-control" id="athlete">
    <option>-- Select Athlete --</option>
    {athletes}
  </select>
</div>

//
// //Use this code to turn athlete list on entry form into a linked list-WORKED
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
//
//
// <option>-- Select Athlete --</option>
//
//
//   <li className="col-md-6" key={athlete.get('objectId')}>
//     {athlete.get('athleteName')}</li>
