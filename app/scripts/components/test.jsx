    var savePhoto = this.setState({'profilePic'});
    var filter910 = athletes.where({'ageGroup': '9-10'});


    var file;
    var files = e.target.files || e.dataTransfer.files;
     file = files[0];


   $('#uploadbutton').click(function() {
     var serverUrl = 'https://kmcakes.herokuapp.com/files' +'/'+ file.name;

   $.ajax({
     type: "POST",
     beforeSend: function(request) {
       request.setRequestHeader("X-Parse-Application-Id", 'kmcakes');
       request.setRequestHeader("X-Parse-REST-API-Key", 'greenvillejets');
       request.setRequestHeader("Content-Type", file.type);
     },
     url: serverUrl,
     data: file,
     processData: false,
     contentType: false,
     success: function(data) {
       alert("File available at: " + data.url);
       var profilePic= data.url;
       console.log(profilePic);
          //  newAthlete.set('profilepic', profilePic);
     },
     error: function(data) {
       var obj = jQuery.parseJSON(data);
       alert(obj.error);
     }

   });
 });
   var timeInSeconds = this.state.resultscollection.map(function(result){
     result.get('minutes')/60 + result.get('seconds')
     return <li key={result.get('objectId')} value={result.get('objectId')}>
       {timeInSeconds}
     </li>

   });
   var entrees=this.props.menuItems.where({
         foodType: 'Entree'
       }).map(function(model){
         return (
         <li key={model.cid}>{model.get('title')} {model.displayPrice()} <button onClick={function(){self.props.addToCart(model)}} className="btn btn-xs add-button">Add</button></li>
         );

         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
       -                <span className="sr-only">Toggle navigation</span>
       -                <span className="icon-bar"></span>
       -                <span className="icon-bar"></span>
       -                <span className="icon-bar"></span>
       -              </button>

         <button onClick={self.handleRemoveAthlete}>Delete</button>

           handleRemoveAthlete: function(model){
             this.state.athlete.remove(model);
             this.forceUpdate();
           },
navbar-fixed-top to help navbar's stay at top, but changed other things

function convert(input) {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    return (minutes * 60 + seconds).toFixed(3);
}


<nav>
  <div className="navbar-header">
    <a className="navbar-brand jets-brand" href="#">
      <span className="glyphicon glyphicon-plane" ></span>
      <span className="jets-brand">Greenville Jets Track Club</span>
      <span className="glyphicon glyphicon-plane"></span>
    </a>
  </div>
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
