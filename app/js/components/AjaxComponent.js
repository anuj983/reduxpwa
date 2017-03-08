import React from 'react';
import LinkComponent from './LinkComponent';

class AjaxComponent extends React.Component {
  // getInitialState() {
  constructor(props) {
    super(props);
    //want to set initial state, set here by using this.state = {};
    this.state = {
      "data": [{"id": "abc"}, {"id": 2}, {"id": 3}]
    };
  }
  componentDidMount() {
    /**** Question - starts ****
      Ques: When and how many times this function will be called?
      Ans: This will be called only once when component will get mounted on dom and here we are changin state using
           setState which won't call this function again because setState will update the component by calling render
           function since component is already mounted in dom, so there won't be any recursion of ajax calls here.
    ***** Question - ends *****/


    var that = this;
    var url = 'https://api.github.com/users/mralexgray/repos'
    fetch(url).then(function(response) {
      if(response.status >= 400) {
        throw new Error("Bad server response");
      }
      return response.json();
    }).then(function(responseJson) {
        //console.log(responseJson);//array of objects
        that.setState({ data: responseJson });
        // that.setState(responseJson.map(responseObj) {
        //   return responseObj.id;
        // });
    });

  }

  render() {
    return (
      <div>
        <div>
          Ajax content Loading....
          {
            this.state.data.map(function(responseObj){
              return responseObj.id;
            })
          }
        </div>
      </div>
    );
  }
}

AjaxComponent.defaultProps = {
    "data": "AjaxComponent's default prop"
}

export default AjaxComponent;
