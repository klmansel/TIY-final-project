


//Use this code to turn athlete list on entry form into a linked list
var filterBy = this.props.athleteList.where({
  'ageGroup': this.state.selectedAge,
  'gender': this.state.selectedGender
}).map(function(model){
  return (
     <a key={model.get('objectId')} href={'#athletes/' + model.get('objectId')}>
       <li>
      {model.get('athleteName')}
      </li>
  </a>
  );
});


<option>-- Select Athlete --</option>
