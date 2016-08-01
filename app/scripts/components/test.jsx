
<li key={model.get('objectId')}>
  {model.get('athleteName')}
  <img src={model.get('profilePic')} />
</li>
//icon camera

<i class="fa fa-camera" aria-hidden="true"></i>

//Upload button
    <input className="jets-button" id="uploadbutton" type="button" value="Upload Profile Photo"/>

//delete athlete code

         <button onClick={self.handleRemoveAthlete}>Delete</button>

           handleRemoveAthlete: function(model){
             this.state.athlete.remove(model);
             this.forceUpdate();
           },

  <ul>
    <li><a className="jets-brand" href="#schedule">Schedule/Results</a></li>
    <li></li>
    <li></li>
    <li><a className="jets-brand" href="#coachesOnly">Coaches Area</a></li>
    <li><a href="https://www.facebook.com/GreenvilleJets/?fref=ts"
      target="_blank"><i className="fa fa-facebook-official"></i></a>
    <a className="jets-brand" href="#contactInfo">Contact Us</a></li>
  </ul>
</nav>
