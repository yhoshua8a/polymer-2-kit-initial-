
(function NgobDefinition(){

  'use strict';


  class NgobComponent extends Polymer.Element {
    static get is() { return "ngob-component-component"; }

    static get properties(){
      return {
        default:{type:String,
          value:"default"}
      }
    }

    connectedCallback(){
      super.connectedCallback();
    }

  }
  // Register the new element with the browser
  customElements.define(NgobComponent.is, NgobComponent);

})();
