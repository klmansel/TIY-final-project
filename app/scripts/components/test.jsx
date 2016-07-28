


var SelectAthlete = React.createClass({
  getInitialState: function(){
    return {
      athleteCollection: new AthleteCollection()
    }
  },
  componentWillMount: function(){
    var self = this;
    var athleteCollection = this.state.athleteCollection;
    athleteCollection.fetch().done(function(){
      self.setState({athleteCollection: athleteCollection});
    });
  },
  render: function(){
    var athletes = this.state.athleteCollection.map(function(athlete){
      return <option key={athlete.get('objectId')} value={athlete.get('objectId')}>{athlete.get('athleteName')}</option>
    });

    console.log(this.state.athleteCollection);

    return (
      <div>
      <label htmlFor="athlete">Athlete Name</label>
      <select onChange={this.props.chooseAthlete} type="text" className="form-control" id="athlete" placeholder="Choose Athlete">
        <option value="">-- Select Athlete --</option>
        {athletes}
      </select>
      </div>
    );
  }

});

navbar-fixed-top to help navbar's stay at top, but changed other things



<div className="row col-md-12">
  <div className="jetspics">
    <div><img src="images/jets2015.jpg" alt="jets2015"></img></div>
    <div><img src="images/jetspic2.jpg" alt="jetspic2"></img></div>
    <div><img src="images/jets2016.jpg" alt="jets2016"></img></div>
  </div>
</div>
