//No longe
var ResultsList = React.createClass({
  getInitialState: function(){
    return {
      resultscollection: new ResultsCollection()
    }
  },
  componentWillMount: function(){
    var self = this;
    var resultscollection = this.state.resultscollection;
    resultscollection.fetch().done(function(){
      self.setState({resultscollection: resultscollection});
      console.log('Results:',resultscollection.length);

    });
  },
  render: function(){
    var user = JSON.parse(localStorage.getItem('user'));
    var results = this.state.resultscollection.map(function(result){
      return <li key={result.get('objectId')} value={result.get('objectId')}>
        {result.get('athlete'),result.get('event'),'   ', result.get('minutes'), ':',result.get('seconds')}</li>
    });
    return (
      <div className="col-md-6">
        <h3 className="coach-headings">Results:</h3>
        <ul className="results-list">
          {results}
        </ul>
      </div>
    )
  }
});
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
