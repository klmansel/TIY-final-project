

<ul className="btn-list profile-btns">
  <li><button className="jets-button" type="button"><a href="#">Home</a></button></li>
  <li><button className="jets-button" type="button"><a href="#athleteEntry">Athlete Entry</a></button></li>
  <li><button className="jets-button" type="button"><a href="#athleteProfile">Athlete Profiles</a></button></li>
  <li><button className="jets-button" type="button"><a href="#results">Event Results Entry</a></button></li>
  <li><button className="jets-button" onClick={this.handleSignout} type="button"><a href="#">Log Out</a></button></li>
</ul>

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



//Hero Banner












.new-navlist,
.jets-button {
  @extend .hero-desc;
  background-color: lighten($black, 10%);
  border-radius: 5px;
  box-shadow: 2px 2px 20px $black;
  color: $machinered;
  font-size: 20px;
  width: 200px;

  &:hover {
    color: $trackitgray;
    list-style-type: none;
    text-decoration: none;
    text-overflow: none;
    transition: .5s;
     }

  a {
    color: $machinered;
    font-size: 20px;
    text-decoration: none;
    vertical-align: middle;

    &:hover {
     color: $trackitgray;
     list-style-type: none;
     text-decoration: none;
     text-overflow: none;
     transition: .5s;
    }

    &:click {
       color: $backgroundgray;
       text-decoration: none;
    }
  }
}
//Used to line up buttons on pages
.btn-list {

  li {
    display: inline;
    float: left;
    list-style-type: none;
    margin: 0 auto;
  }
}
//Jets Page Nav and Hero
.new-nav {
  background-color: darken($jetsyellow, 10%);
  border-radius: 10%;
  display: block;
  font-family: 'Coda',sans-serif;
  height: 600px;
  margin-bottom: 30px;
  margin-left: 15px;
  margin-top: 30px;
  opacity: .5;
  width: 800px;

  @media screen and (max-width: 480px) {
    background-color: transparent;
  }

  span {
    color: $jetsgreen;
  }

  h1 {
    left: 20px;
    top: 10px;
  }

  p {
    left: 20px;
    padding-bottom: 30px;
    position: relative;
    text-align: left;
    top: 30px;
    width: 650px;
  }
}

.on-hover {
  bottom: 0;
  color: $white;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  visibility: hidden;
}

.icon-wrap {
  position: relative;

  img {
    display: inline-block;
    float: left;
    height: 100px;
    padding-bottom: 25px;
    max-width: 100%;
  }

  a {
    color: $backgroundgray;
    display: inline;
    font-size: 30px;
    text-decoration: none;
  }

  p {
    color: $jetsgreen;
    display: inline;
    width: 350px;

    @media screen and (max-width: 480px) {
      color: $white;
      visibility: visible;
    }
  }

  &:hover .on-hover {
    display: inline;
    visibility: visible;
  }
}

.nav-icons {
  li {
    list-style-type: none;
    padding-bottom: 25px;
  }
}


.glyphicon-plane {
  color: $jetsgreen;
  display: inline-block;
}

.new-jets-page::before {
  content: '';
  left: 0;
  position: fixed;
  right: 0;
  z-index: -1;

  background-image: url('../images/cf1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 800px;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

.new-jets-page{
  left: 0;
  position: relative;
  right: 0;
  z-index: 0;
}

.navbar {
  background-color: $jetsyellow;
  border: 0;
  margin-bottom: 0;
}

.jets-brand,
.footer-text {
  color: $backgroundgray;
  font-family: 'Ubuntu', cursive;
  font-size: 30px;


  &:hover {
    color: $jetsyellow;
  }
}

//Track Background
.bkg-pages::before {
  content: '';
  left: 0;
  position: fixed;
  right: 0;
  z-index: -1;

  background-image: url('../images/trackpic.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 800px;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

//Track background and TrackIt app design
.bkg-pages{
  left: 0;
  position: relative;
  right: 0;
  z-index: 0;

  label {
    color: $white;
    font-family: 'Reem Kufi', sans-serif;
    font-size: 16px;
  }

  button {
    margin: auto;
  }
}

.navbar-right {
  a {
    display: inline-block;
    float: right;
  }
}

//Coaches Page
.coaches-menu {
  h1 {
    margin-bottom: 20px;
    // text-align: center;
  }

  button {
    display: block;
    margin: 0 auto;
  }

  li {
    list-style-type: none;
    margin-top: 15px;
  }
}

.coach-homepage {
  li {
    list-style-type: none;
    text-align: center;
  }

  button {
    margin: auto;
  }
}

.homepage-title {
  color: $machinered;
  font-family: 'Reem Kufi', sans-serif;
  text-align: center;
}

.login-heading {
  color: $black;
  font-family: 'Reem Kufi', sans-serif;
  text-align: center;
}

.coach-headings {
  color: $white;
  // font-family: 'Permanent Marker', cursive;
  font-family: 'Reem Kufi', sans-serif;
  text-align: center;
}

.contact-us {
  color: $jetsyellow;
  font-family: 'Reem Kufi', sans-serif;
  font-size: 20px;
  text-align: left;
}

//Sign up and sign in
.loginform {
  background-color: $profilegray2;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 90px;
  opacity: .8;
  padding: 10px;

  ul {
    margin-top: 10px;
  }

  li {
    float: left;
    margin-top: 10px;
    padding-bottom: 10px;
  }

  button {
    display: block;
    margin: 0 auto;
  }
}

//Photos
.jetspics {
  height: 400px;
  padding-top: 40px;
  width: 1000px;

  img {
    margin: auto;
  }
}

//Schedule
.jets-map {
  padding: 60px;
}

.schedule-event {
  color: $black;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  font-weight: lighter;
  line-height: 30px;
  list-style: disc;

  a {
    color: $jetsgreen;
    text-decoration: none;

    &:hover {
      font-size: 18px;
    }
  }
}

.well {
  background-color: $jetsyellow;
}

//Athletes

.athlete-list,
.results-list {
  li {
    color: $white;
    font-family: 'Reem Kufi', sans-serif;
    font-size: 16px;
    list-style: none;
    text-align: center;
  }
}

.entry-btn {
  display: block;
  margin: 0 auto;

  li {
    float: left;
    margin-top: 15px;
  }
}

.new-athlete-form {
  background-color: $white;
  opacity: .8;
}

//Profiles
.upload-photo {
  color: $white;
  margin-left: 15px;
  padding-top: 20px;
}

//change cursor on hover
.fulllistprofileview {
  cursor: pointer;
}

.profile-btns {
  background-color: $white;
  float: left;
  margin-left: 0;
  margin-right: 0;

  li {
    margin-left: 15px;
    margin-top: 15px;
  }
}

.new-profile-nav {
  color: $machinered;
  font-family: 'Reem Kufi', sans-serif;

  ul {
    background-color: $black;
  }

  li {
    text-decoration: none;
  }
}

.each-result {
  font-size: 18px;
}

.athlete-entry-btn {
  li {
    margin-top: 15px;
  }

  span {
    color: $white;
  }
}

.singleathletecaption,
.caption {
  background-color: $white;
  color: $machinered;
  margin: 0;
  opacity: .8;
  text-align: center;

  span {
    color: $machinered;
  }
}

.thumbnail {
  background-color: rgba(0, 0, 0, 0.6);
  border: 0;
  box-shadow: 5px 5px 50px $gray;
  font-family: 'Reem Kufi', sans-serif;
  margin-top: 15px;

  span {
    color: $machinered;
  }
}

.thumbnail-pic {
  border-radius: 50%;
  box-shadow: 0 0 12px $machinered;
  display: block;
  height: 260px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 300px;
}

.thumbnail-pic-wrap {
  margin: 0 auto;
  overflow: hidden;
}

.athlete-results {
  background-color: $profilegray2;
  border: 3px solid $black;
  box-shadow: 10px 10px 30px $gray;
  color: $white;
  height: 450px;
  margin-top: 15px;
  opacity: .8;
  width: 450px;

  li {
    font-family: 'Reem Kufi', sans-serif;
    font-size: 14px;
  }
}

//Profile Pic
.profile-pic-field {
  cursor: pointer;
  font-size: 25px;

  img {
    color: $black;
    height: 75px;
  }
}

.pic-input {
  height: .01 px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: .01 px;
  z-index: -1;
}

.profile-icon {
  color: $white;
  font-size: 40px;
}
}
