Sorted by event: .where
actualExpenseCollection.where({
     "type": "Mortgage/Rent"
   }).fetch().done(function(){
     console.log(actualExpenseCollection);
     self.setState({actualExpenseCollection: actualExpenseCollection});
     console.log(self.state.actualExpenseCollection);
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
